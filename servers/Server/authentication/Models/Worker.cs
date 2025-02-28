using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace authentication.Models
{
    public class Worker
    {
        public Worker()
        {
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }

        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public string IdCompany { get; set; }

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

        public int? SuccessfulTasks { get; set; }

        public List<string>? AssignedTaskIds { get; set; } = new();

        public List<string>? CompletedTaskIds { get; set; } = new();

        public string? RefreshToken { get; set; }

        public string? ConcurrencyStamp { get; set; }

        [Required]
        public string CompanyKey { get; set; }
    }
}