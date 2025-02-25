using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PGAdminDAL.Model
{
    public class Cars
    {

        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string IdCompany { get; set; }
        public string Numbers { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int HorsePower { get; set; }
        public int NumberTransportation { get; set; }
        public List<string> TransportationId { get; set; } = new();
        public string TransportationOnline { get; set; }
        public string WorkerId { get; set; }
        public List<string> LastWorkers { get; set; } = new();
        public DateTime? CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
