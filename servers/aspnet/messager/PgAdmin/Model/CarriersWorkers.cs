
using PgAdmin.Hash;
using System.ComponentModel.DataAnnotations;

namespace PGAdminDAL.Model
{
    public class CarriersWorkers
    {

        public CarriersWorkers()
        {
            ConcurrencyStamp = new sha256().GenerateKey().ToString();
        }

        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public List<string> IdCompany = new List<string>();
        public string FullName { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmation { get; set; }
        public string HashPassword { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmation { get; set; }
        public string Location { get; set; }
        public string Avatar { get; set; }
        public string Role { get; set; }
        public int SuccessfulTransportation { get; set; }
        public List<string> TransportationId = new List<string>();
        public int ChatsNumber { get; set; }
        public List<string> ChatsId = new List<string>();
        public int TruckNumber { get; set; }
        public List<string> TruckId = new List<string>();
        public string PublicKey { get; set; }
        public string PrivateKey { get; set; }
        public string CompanyKey { get; set; }
        public string ConcurrencyStamp { get; set; }
        public double Rating { get; set; }
        public int ReviewsNumbers { get; set; }
        public List<string> ReviewsId = new List<string>();
    }
}
