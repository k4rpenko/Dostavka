using PgAdmin.Hash;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PGAdminDAL.Model
{
    public class ShippersWorkers
    {
        public ShippersWorkers()
        {
            ConcurrencyStamp = new sha256().GenerateKey().ToString();
        }

        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string IdCompany { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmation { get; set; }
        public string HashPassword { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmation { get; set; }
        public string Location { get; set; }
        public string Avatar { get; set; }
        public int SuccessfulTransportation { get; set; }
        private List<string> transportationId = new List<string>();
        public List<string> TransportationId
        {
            get => transportationId;
            set
            {
                transportationId = value;
                ransportationNumber = value.Count;
            }
        }

        public int ransportationNumber { get; private set; }
        private List<string> chatsId = new List<string>();
        public List<string> ChatsId
        {
            get => chatsId;
            set
            {
                chatsId = value;
                ChatsNumber = value.Count;
            }
        }

        public int ChatsNumber { get; private set; }
        public string PublicKey { get; set; }
        public string PrivateKey { get; set; }
        public string CompanyKey { get; set; }
        public string ConcurrencyStamp { get; set; }
        public double Rating { get; set; }
        private List<string> reviewsId = new List<string>();
        public List<string> ReviewsId
        {
            get => reviewsId;
            set
            {
                reviewsId = value;
                ReviewsNumbers = value.Count;
            }
        }

        public int ReviewsNumbers { get; private set; }
    }
}