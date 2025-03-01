using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace main.Models.MessageChat
{
    public class Message
    {
        public int Id { get; set; }

        [BsonElement("IdUser")]
        public string IdUser { get; set; }

        [BsonElement("Text")]
        public string Text { get; set; }

        [BsonElement("Img")]
        public string? Img { get; set; }

        [BsonElement("AnswerText")]
        public string? IdAnswer { get; set; }

        [BsonElement("View")]
        public bool? View { get; set; }

        [BsonElement("Send")]
        public bool? Send { get; set; }

        [BsonElement("Chang")]
        public bool? Chang { get; set; }

        [BsonElement("CreatedAt")]
        public DateTime? CreatedAt { get; set; }

        [BsonElement("UpdatedAt")]
        public DateTime? UpdatedAt { get; set; }
    }

    public class ChatModelMongoDB
    {
        [BsonId]
        [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }

        [BsonElement("UsersID")]
        public List<string>? UsersID { get; set; } = new List<string>();

        [BsonElement("Chat")]
        public List<Message>? Chat { get; set; } = new List<Message>();

        [BsonElement("Timestamp")]
        public DateTime? Timestamp { get; set; } = DateTime.UtcNow;
    }
}

