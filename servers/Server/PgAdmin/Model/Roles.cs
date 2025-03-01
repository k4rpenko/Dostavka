using Microsoft.AspNetCore.Identity;
using PgAdmin.Hash;
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
        public int Id { get; set; }
        public string Role { get; set; }
    }
}
