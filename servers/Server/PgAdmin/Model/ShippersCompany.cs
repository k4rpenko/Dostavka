using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace PGAdminDAL.Model
{
    public class ShippersCompany
    {

        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string Title { get; set; }
        public string NameDirector { get; set; }
        public string idDirector { get; set; }
        public string Registration { get; set; }
        public string PhoneNumber { get; set; }
        public bool? PhoneConfirmation { get; set; }
        public string email { get; set; }
        public bool? ConfirmationEmail { get; set; }
        public string Avatar { get; set; }
        public string? WorkersNumber { get; set; }
        public string? TransportationNumber { get; set; }
        public int? SuccessfulTransportation { get; set; }
        public string? TransportationOnline { get; set; }
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
