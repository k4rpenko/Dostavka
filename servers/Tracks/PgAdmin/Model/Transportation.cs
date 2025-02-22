using System;
using System.ComponentModel.DataAnnotations;

namespace PGAdminDAL.Model
{
    public class Transportation
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string TrackNumber { get; set; }
        public string IdCarriersCompany { get; set; }
        public string IdShippersCompany { get; set; }
        public string IdTruck { get; set; }
        public string IdCarriersWorkers { get; set; }
        public string IdShippersWorkers { get; set; }
        public string From { get; set; }
        public string Where { get; set; }
        public double[] FromCoordinates { get; set; } = new double[2];
        public double[] WhereCoordinates { get; set; } = new double[2];
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}