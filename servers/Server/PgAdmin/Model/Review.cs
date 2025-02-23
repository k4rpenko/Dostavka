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
    public class Review
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string TypeWork { get; set; }
        public string Role { get; set; }
        public string IdPeople { get; set; }
        public string Title { get; set; }
        public string Сontext { get; set; }
        public double Rating { get; set; }
    }
}
