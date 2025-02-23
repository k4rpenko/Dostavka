using Hash;
using Hash.Interface;
using message.Models.MessageChat;
using messager.Modules.Chat;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MongoDB;
using MongoDB.Bson;
using MongoDB.Driver;

namespace messager.Controllers
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

        [HttpGet("{chatID}")]
        public async Task<IActionResult> LongPoll(string chatID, CancellationToken cancellationToken)
        {
            DateTime lastCheckTime = DateTime.UtcNow;
            TimeSpan timeout = TimeSpan.FromSeconds(30);
            DateTime endTime = DateTime.UtcNow.Add(timeout);
            if (!Request.Cookies.TryGetValue("_AT", out string cookieValue))
            {
                return Unauthorized();
            }
            var id = new JWT().GetUserIdFromToken(cookieValue);
            var objectId = ObjectId.Parse(chatID.ToString());

            while (DateTime.UtcNow < endTime)
            {
                var newMessages = await _customers
                    .Find(m => m.Id == objectId && m.Chat.Last().CreatedAt > lastCheckTime)
                    .ToListAsync(cancellationToken);

                if (newMessages.Count > 0)
                {
                    return Ok(newMessages);
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
        public async Task<IActionResult> Send(string chatID, ModuleJson Message, CancellationToken cancellationToken)
        {
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
                Message = new Message
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
        public async Task<IActionResult> Creat(ModuleJson Message, CancellationToken cancellationToken)
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


            var carrierWorker = await context.CarriersWorkers.FirstOrDefaultAsync(u => u.Id == id);
            var peopleAsShipper = await context.ShippersWorkers.FirstOrDefaultAsync(u => u.Id == Message.AddUsersIdChat[1]);

            if (carrierWorker == null && peopleAsShipper == null)
            {
                var PeopleInfo = new Chats
                {
                    Message = new Message
                    {
                        IdUser = peopleAsShipper.Id,
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
                    Message = new Message
                    {
                        IdUser = id,
                        Text = "",
                    },
                };

                await _customers.InsertOneAsync(newChat);
                PeopleInfo.Id = newChat.Id.ToString();

                carrierWorker.ChatsId.Add(newChat.Id.ToString());
                peopleAsShipper.ChatsId.Add(newChat.Id.ToString());

                await context.SaveChangesAsync();
                return Ok(new { PeopleInfo });
            }
            else if (peopleAsShipper == null && carrierWorker == null)
            {
                var shipperWorker = await context.ShippersWorkers.FirstOrDefaultAsync(u => u.Id == id);
                var peopleAsCarrier = await context.CarriersWorkers.FirstOrDefaultAsync(u => u.Id == Message.AddUsersIdChat[1]);

                var PeopleInfo = new Chats
                {
                    Message = new Message
                    {
                        IdUser = peopleAsCarrier.Id,
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
                    Message = new Message
                    {
                        IdUser = id,
                        Text = "",
                    },
                };

                await _customers.InsertOneAsync(newChat);
                PeopleInfo.Id = newChat.Id.ToString();

                shipperWorker.ChatsId.Add(newChat.Id.ToString());
                peopleAsCarrier.ChatsId.Add(newChat.Id.ToString());

                await context.SaveChangesAsync();
                return Ok(new { PeopleInfo });
            }

            return NotFound();
        }
    }
}
