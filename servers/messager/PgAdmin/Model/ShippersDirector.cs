using Microsoft.AspNetCore.Identity;
using PgAdmin.Hash;
using System.ComponentModel.DataAnnotations;

namespace PGAdminDAL.Model
{
    public class ShippersDirector
    {
        public ShippersDirector()
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
        public List<string> TransportationId = new List<string>(); 
        public List<string> WorkersId = new List<string>();
        public List<string> EmployeeKeys = new List<string>();
        public List<string> EmployeeBusKeys = new List<string>();
        public List<string> EmployeeUsageKeys = new List<string>();
        public string ConcurrencyStamp { get; set; }
    }
}
