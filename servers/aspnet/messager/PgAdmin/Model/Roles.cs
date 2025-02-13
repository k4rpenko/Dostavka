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
    public class Roles
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Role { get; set; }
    }
}
