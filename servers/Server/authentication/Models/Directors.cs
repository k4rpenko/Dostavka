using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace authentication.Models
{
    public class Directors
    {
        public Directors()
        {
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }

        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public string IdCompany { get; set; }

        public List<string>? IDLastCompany { get; set; } = new();

        [Required]
        public string FullName { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        public bool? EmailConfirmation { get; set; }

        [Required]
        public string HashPassword { get; set; }

        [Required, Phone]
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
