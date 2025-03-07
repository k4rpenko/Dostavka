namespace main.Modules
{
    public class WorkerData
    {
        public string Id { get; set; }
        public string idCompany { get; set; }
        public List<string>? IDLastCompany { get; set; } = new();
        public string FullName { get; set; }
        public string Email { get; set; }
        public bool? EmailConfirmation { get; set; }
        public string HashPassword { get; set; }
        public string PhoneNumber { get; set; }
        public bool? PhoneNumberConfirmation { get; set; }
        public string? Location { get; set; }
        public string Avatar { get; set; }
        public string Role { get; set; }
        public string RoleWork { get; set; }
        public List<string>? TransportationId { get; set; } = new();
        public int? TransportationNumber { get; set; }
        public int? SuccessfulTransportation { get; set; }
        public List<string>? ChatsId { get; set; } = new();
        public int? ChatsNumber { get; set; }
        public List<string>? TruckId { get; set; } = new();
        public int? TruckNumber { get; set; }
        public string PublicServerKey { get; set; }
        public string PublicKey { get; set; }
        public string PrivateKey { get; set; }
        public string CompanyKey { get; set; }
        public string? RefreshToken { get; set; }
        public double? Rating { get; set; }
        public List<string>? ReviewsId { get; set; } = new();
        public int? ReviewsNumbers { get; set; }
    }
}
