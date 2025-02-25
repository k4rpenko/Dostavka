using MongoDB.Bson.Serialization.Attributes;

namespace main.Modules.Chat
{
    public class ModuleJson
    {
        public List<string>? AddUsersIdChat { get; set; }
        public string? IdUser { get; set; }
        public string? IdChat { get; set; }
        public int? IdMessage { get; set; }
        public string? Text { get; set; }
        public string? Img { get; set; }
        public string? IdAnswer { get; set; }
        public string? Update { get; set; }
    }
}
