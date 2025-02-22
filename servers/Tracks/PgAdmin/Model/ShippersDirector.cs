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
        public bool? EmailConfirmation { get; set; }
        public string HashPassword { get; set; }
        public string PhoneNumber { get; set; }
        public bool? PhoneNumberConfirmation { get; set; }
        public string? Location { get; set; }
        public string Avatar { get; set; }
        public int? SuccessfulTransportation { get; set; }
        public List<string>? TruckId { get; set; } = new();
        public List<string>? TransportationId { get; set; } = new();
        public List<string>? WorkersId { get; set; } = new();
        public List<string>? EmployeeKeys { get; set; } = new();
        public List<string>? EmployeeBusKeys { get; set; } = new();
        public List<string>? EmployeeUsageKeys { get; set; } = new();
        public string? RefreshToken { get; set; }
        public string? ConcurrencyStamp { get; set; }
    }
}
