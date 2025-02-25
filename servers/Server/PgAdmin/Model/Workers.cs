using PgAdmin.Hash;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PgAdmin.Model
{
    public class Workers
    {
        public Workers()
        {
            ConcurrencyStamp = new sha256().GenerateKey().ToString();
        }

        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();
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
        private List<string>? transportationId = new List<string>();
        public List<string>? TransportationId
        {
            get => transportationId;
            set
            {
                transportationId = value;
                SuccessfulTransportation = value.Count;
            }
        }
        public int? TransportationNumber { get; private set; }
        public int? SuccessfulTransportation { get; private set; }
        private List<string>? chatsId = new List<string>();
        public List<string>? ChatsId
        {
            get => chatsId;
            set
            {
                chatsId = value;
                ChatsNumber = value.Count;
            }
        }
        public int? ChatsNumber { get; private set; }
        private List<string>? truckId = new List<string>();
        public List<string>? TruckId
        {
            get => truckId;
            set
            {
                truckId = value;
                TruckNumber = value.Count;
            }
        }
        public int? TruckNumber { get; private set; }
        public string PublicKey { get; set; }
        public string PrivateKey { get; set; }
        public string CompanyKey { get; set; }
        public string? ConcurrencyStamp { get; set; }
        public string? RefreshToken { get; set; }
        public double? Rating { get; set; }
        private List<string>? reviewsId = new List<string>();
        public List<string>? ReviewsId
        {
            get => reviewsId;
            set
            {
                reviewsId = value;
                ReviewsNumbers = value.Count;
            }
        }
        public int? ReviewsNumbers { get; private set; }
    }
}
