using main.Models.MessageChat;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using PgAdmin.Model;
using System.ComponentModel.DataAnnotations;

namespace main.Modules.Chat
{
    public class GetChats
    {
        public ChatModel chat { get; set; }
        public CompanysModel companys { get; set; }
        public WorkerModel worker { get; set; }
    }

    public class Message
    {
        public int Id { get; set; }
        public string IdUser { get; set; }
        public string Text { get; set; }
        public string Type { get; set; }
        public string? Img { get; set; }
        public string? IdAnswer { get; set; }
        public bool? View { get; set; }
        public bool? Send { get; set; }
        public bool? Chang { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class ChatModel
    {
        public string Id { get; set; }
        public string UsersID { get; set; }
        public List<Message>? Messages { get; set; } = new List<Message>();
        public DateTime? Timestamp { get; set; } = DateTime.UtcNow;
    }

    public class CompanysModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string? Title { get; set; }
        public string IdDirector { get; set; }
        public string PhoneNumber { get; set; }
        public string email { get; set; }
        public string Avatar { get; set; }
        public double? Rating { get; set; }
        public int? ReviewsNumbers { get; set; }
    }

    public class WorkerModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string? FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Avatar { get; set; }
    }

    public class DirectorModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string? FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Avatar { get; set; }
    }
}
