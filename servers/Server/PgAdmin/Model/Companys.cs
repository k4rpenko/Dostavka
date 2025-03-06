using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PgAdmin.Model
{
    public class Companys
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public List<string>? IDLastDirectors { get; set; } = new();
        public string? Title { get; set; }
        public string NameDirector { get; set; }
        public string IdDirector { get; set; }
        public string? Registration { get; set; }
        public string PhoneNumber { get; set; }
        public bool? PhoneConfirmation { get; set; }
        public string email { get; set; }
        public bool? ConfirmationEmail { get; set; }
        public string Avatar { get; set; }
        public int? TrucksNumber { get; set; }
        public int? WorkersNumber { get; set; }
        public int? TransportationNumber { get; set; }
        public int? SuccessfulTransportation { get; set; }
        public string? TransportationOnline { get; set; }
        public double? Rating { get; set; }
        public string? Role { get; set; }
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
        [NotMapped]
        public object Name { get; set; }

        [NotMapped]
        public object Address { get; internal set; }
        [NotMapped]
        public object Phone { get; set; }
    }
}
