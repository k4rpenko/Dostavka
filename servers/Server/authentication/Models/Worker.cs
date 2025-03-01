using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace authentication.Models
{
    public class Workers
    {
        public Workers()
        {
            Id = Guid.NewGuid().ToString();
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }

        [Key]
        public string Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string IdCompany { get; set; }

        [Required]
        [MaxLength(255)]
        public string FullName { get; set; }

        [Required, EmailAddress]
        [MaxLength(255)]
        public string Email { get; set; }

        public bool EmailConfirmation { get; set; } = false;

        [Required]
        [MaxLength(255)]
        public string HashPassword { get; set; }

        [Required, Phone]
        [MaxLength(20)]
        public string PhoneNumber { get; set; }

        public bool PhoneNumberConfirmation { get; set; } = false;

        [MaxLength(500)]
        public string? Location { get; set; }

        [MaxLength(500)]
        public string? Avatar { get; set; }

        public HashSet<string> AssignedTaskIds { get; set; } = new();
        public HashSet<string> CompletedTaskIds { get; set; } = new();

        [MaxLength(500)]
        public string? RefreshToken { get; set; }

        [MaxLength(255)]
        public string ConcurrencyStamp { get; set; }

        [Required]
        [MaxLength(255)]
        public string CompanyKey { get; set; }
    }
}
