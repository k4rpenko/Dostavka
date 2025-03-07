using Hash;
using Hash.Interface;
using main.Modules.Chat;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MongoDB;
using MongoDB.Bson;
using MongoDB.Driver;
using main.Models.MessageChat;
using PgAdmin.Model;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace main.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class message : Controller
    {
        private readonly IMongoCollection<ChatModelMongoDB> _customers;
        private readonly AppDbContext context;
        private readonly IJwt _jwt;

        public message(AppMongoContext _Mongo, IConfiguration _configuration, IJwt jwt, AppDbContext _context)
        {
            _customers = _Mongo.Database?.GetCollection<ChatModelMongoDB>(_configuration.GetSection("MongoDB:MongoDbDatabaseChat").Value);
            context = _context;
            _jwt = jwt;
        }

        [HttpGet("LongPoll")]
        public async Task<IActionResult> LongPoll(CancellationToken cancellationToken)
        {
            if (!Request.Cookies.TryGetValue("_AT", out string cookieValue))
            {
                return Unauthorized();
            }

            DateTime lastCheckTime = DateTime.UtcNow;
            TimeSpan timeout = TimeSpan.FromSeconds(30);
            DateTime endTime = DateTime.UtcNow.Add(timeout);

            var id = _jwt.GetUserIdFromToken(cookieValue);
            var worker = await context.Workers
                .FirstOrDefaultAsync(u => u.Id == id, cancellationToken);

            if (worker == null || worker.ChatsId == null || worker.ChatsId.Count == 0)
            {
                return NoContent();
            }

            var chatIds = worker.ChatsId.Select(id => ObjectId.Parse(id)).ToList();

            while (DateTime.UtcNow < endTime)
            {
                var updatedChats = await _customers
                    .Find(m => chatIds.Contains(m.Id) && m.Chat.Any(c => c.CreatedAt > lastCheckTime))
                    .ToListAsync(cancellationToken);

                if (updatedChats.Count > 0)
                {
                    var chatModel = updatedChats.FirstOrDefault();
                    if (chatModel == null)
                    {
                        return NoContent();
                    }
                    var workerId = chatModel.UsersID.FirstOrDefault(u => u != id);
                    var workerTwo = await context.Workers.FirstOrDefaultAsync(u => u.Id == (workerId ?? ""));
                    var companyWorker = await context.Companys.FirstOrDefaultAsync(c => c.Id == worker.idCompany);

                    var chatInfo = new GetChats
                    {
                        chat = new ChatModel
                        {
                            Id = chatModel.Id.ToString(),
                            Messages = chatModel.Chat
                            .TakeLast(100)
                            .Select(m => new main.Modules.Chat.Message
                            {
                                Id = m.Id,
                                IdUser = m.IdUser,
                                Text = m.Text,
                                Type = m.IdUser != id ? "incoming" : "outgoing",
                                Img = m.Img,
                                IdAnswer = m.IdAnswer,
                                View = m.View,
                                Send = m.Send,
                                Chang = m.Chang,
                                CreatedAt = m.CreatedAt,
                                UpdatedAt = m.UpdatedAt
                            }).ToList(),
                        },
                        companys = companyWorker != null ? new CompanysModel
                        {
                            Title = companyWorker.Title,
                            Avatar = companyWorker.Avatar,
                            Rating = companyWorker.Rating
                        } : null,
                        worker = workerTwo != null ? new WorkerModel
                        {
                            Id = workerTwo.Id,
                            FullName = workerTwo.FullName,
                            PhoneNumber = workerTwo.PhoneNumber,
                            Email = workerTwo.Email,
                            Avatar = workerTwo.Avatar
                        } : null 
                    };
                    return Ok(new { Chats = chatInfo });
                }

                await Task.Delay(1000, cancellationToken);
            }
            return NoContent();
        }


        [HttpPut("Update/{chatID}")]
        public async Task<IActionResult> LongPoll(string chatID, ModuleJson Message, CancellationToken cancellationToken)
        {
            if (!Request.Cookies.TryGetValue("_AT", out string cookieValue) || Message.Update == null)
            {
                return Unauthorized();
            }
            var id = new JWT().GetUserIdFromToken(cookieValue);
            var objectId = ObjectId.Parse(Message.IdChat.ToString());
            var filter = Builders<ChatModelMongoDB>.Filter.Eq(chat => chat.Id, objectId);
            var chatModel = await _customers.Find(filter).FirstOrDefaultAsync();

            if (Message.Update == "View")
            {
                foreach (var message in chatModel.Chat)
                {
                    if (message.IdUser != id && message.View == false)
                    {
                        message.View = true;
                    }
                }
                var update = Builders<ChatModelMongoDB>.Update.Set(chat => chat.Chat, chatModel.Chat);
                await _customers.UpdateOneAsync(filter, update);
                return Ok();
            }
            else if(Message.Update == "Message")
            {
                foreach (var message in chatModel.Chat)
                {
                    if (message.Id == Message.IdMessage)
                    {
                        message.Text = Message.Text;
                        message.Chang = true;
                    }
                }
                var update = Builders<ChatModelMongoDB>.Update.Set(chat => chat.Chat, chatModel.Chat);
                await _customers.UpdateOneAsync(filter, update);
                return Ok();
            }
            return NotFound();
        }

        [HttpPut("{chatID}")]
        public async Task<IActionResult> Send(string chatID, ModuleJson Message)
        {
            if (Message.Text == null) { return NotFound("Message not found"); }
            if (Message.Text.Length > 4096) { return StatusCode(400, "Message text exceeds Telegram's 4096 character limit."); }
            if (!Request.Cookies.TryGetValue("_AT", out string cookieValue))
            {
                return Unauthorized();
            }
            var id = new JWT().GetUserIdFromToken(cookieValue);
            var objectId = ObjectId.Parse(chatID.ToString());
            var filter = Builders<ChatModelMongoDB>.Filter.Eq(chat => chat.Id, objectId);
            var chatModel = await _customers.Find(filter).FirstOrDefaultAsync();
            if (!chatModel.UsersID.Contains(id))
            {
                return NotFound();
            }

            var lastMessageId = chatModel.Chat?.Count > 0
                ? chatModel.Chat.OrderByDescending(m => m.CreatedAt).FirstOrDefault()?.Id ?? 0
                : 0;

            var newMessage = new Chats
            {
                Id = chatID,
                Message = new Models.MessageChat.Message
                {
                    Id = lastMessageId + 1,
                    IdUser = id,
                    Text = Message.Text,
                    Img =  null,
                    IdAnswer = null,
                    CreatedAt = DateTime.UtcNow,
                    View = false,
                    Send = true,
                    Chang = false
                }
            };

            var update = Builders<ChatModelMongoDB>.Update
                .Push(chat => chat.Chat, newMessage.Message)
                .Set(chat => chat.Timestamp, DateTime.UtcNow);

            var updateResult = await _customers.UpdateOneAsync(filter, update);

            if (updateResult.MatchedCount == 0)
            {
                return StatusCode(500, "Internal Server Error");
            }

            return Ok();
        }

        [HttpPost("creat")]
        public async Task<IActionResult> Creat(ModuleJson Message)
        {
            if (!Request.Cookies.TryGetValue("_AT", out string cookieValue))
            {
                return Unauthorized();
            }
            if (Message == null || Message.AddUsersIdChat == null || Message.AddUsersIdChat.Count < 2)
            {
                throw new ArgumentException("Invalid chat model or user IDs.");
            }
            var id = new JWT().GetUserIdFromToken(Message.AddUsersIdChat[0]);

            var filter = Builders<ChatModelMongoDB>.Filter.And(
                Builders<ChatModelMongoDB>.Filter.Or(
                    Builders<ChatModelMongoDB>.Filter.Eq(chat => chat.UsersID[0], id),
                    Builders<ChatModelMongoDB>.Filter.Eq(chat => chat.UsersID[0], Message.AddUsersIdChat[1])
                ),
                Builders<ChatModelMongoDB>.Filter.Or(
                    Builders<ChatModelMongoDB>.Filter.Eq(chat => chat.UsersID[1], id),
                    Builders<ChatModelMongoDB>.Filter.Eq(chat => chat.UsersID[1], Message.AddUsersIdChat[1])
                )
            );


            var You = await context.Workers.FirstOrDefaultAsync(u => u.Id == id);
            var People = await context.Workers.FirstOrDefaultAsync(u => u.Id == Message.AddUsersIdChat[1]);

            if (You == null && People == null) { return NotFound(); }

            var PeopleInfo = new Chats
            {
                Message = new Models.MessageChat.Message
                {
                    IdUser = People.Id,
                    Text = "",
                },
            };

            var existingChat = await _customers.Find(filter).FirstOrDefaultAsync();

            if (existingChat != null)
            {
                return StatusCode(500, "Internal Server Error");
            }

            Message.AddUsersIdChat[0] = id;
            var newChat = new ChatModelMongoDB
            {
                UsersID = Message.AddUsersIdChat,
                Timestamp = DateTime.UtcNow
            };

            var YouInfo = new Chats
            {
                Id = newChat.UsersID.ToString(),
                Message = new Models.MessageChat.Message
                {
                    IdUser = id,
                    Text = "",
                },
            };

            await _customers.InsertOneAsync(newChat);
            PeopleInfo.Id = newChat.Id.ToString();

            You.ChatsId.Add(newChat.Id.ToString());
            People.ChatsId.Add(newChat.Id.ToString());

            await context.SaveChangesAsync();
            return Ok(new { PeopleInfo });

        }

        [HttpGet("AllChats")]
        public async Task<IActionResult> AllChats()
        {
            if (!Request.Cookies.TryGetValue("_AT", out string cookieValue)){ return Unauthorized(); }

            var id = new JWT().GetUserIdFromToken(cookieValue);
            var You = await context.Workers.FirstOrDefaultAsync(u => u.Id == id);
            if (You == null) { return Unauthorized(); }

            List<GetChats> DATA = new List<GetChats>();
            foreach (var chat in You.ChatsId)
            {
                var objectId = ObjectId.Parse(chat.ToString());
                var filter = Builders<ChatModelMongoDB>.Filter.Eq(chat => chat.Id, objectId);
                var chatModel = await _customers.Find(filter).FirstOrDefaultAsync();

                var workerId = chatModel.UsersID.FirstOrDefault(u => u != id);
                var Worker = await context.Workers.FirstOrDefaultAsync(u => u.Id == workerId);
                var CompanyWorker = await context.Companys.FirstOrDefaultAsync(u => u.Id == Worker.idCompany);

                var chatInfo = new GetChats
                {
                    chat = new ChatModel
                    {
                        Id = chatModel.Id.ToString(),
                        Messages = chatModel.Chat
                            .TakeLast(100)
                            .Select(m => new main.Modules.Chat.Message
                            {
                                Id = m.Id,
                                IdUser = m.IdUser,
                                Text = m.Text,
                                Type = m.IdUser != id ? "incoming" : "outgoing",
                                Img = m.Img,
                                IdAnswer = m.IdAnswer,
                                View = m.View,
                                Send = m.Send,
                                Chang = m.Chang,
                                CreatedAt = m.CreatedAt,
                                UpdatedAt = m.UpdatedAt
                            }).ToList(),
                    },
                    companys = new CompanysModel
                    {
                        Title = CompanyWorker.Title,
                        Avatar = CompanyWorker.Avatar,
                        Rating = CompanyWorker.Rating
                    },
                    worker = new WorkerModel
                    {
                        Id = workerId,
                        FullName = Worker.FullName,
                        PhoneNumber = Worker.PhoneNumber,
                        Email = Worker.Email,
                        Avatar = Worker.Avatar
                    }
                };
                DATA.Add(chatInfo);
            }
            return Ok(new {Chats = DATA});
        }

    }
}

