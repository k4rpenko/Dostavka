namespace main.Models.MessageChat
{
    public class Chats
    {
        public string Id { get; set; }
        public List<string> AddUsersIdChat { get; set; }
        public Message Message { get; set; }
        public Message[] MessageArray { get; set; }
    }
}
