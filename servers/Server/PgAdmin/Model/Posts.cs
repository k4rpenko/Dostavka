using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PgAdmin.Model
{
    public class Posts
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string Image { get; set; }
        public string Text { get; set; }
        public string IdCompany { get; set; }
        public DateTime? CreatAt { get; set; }
    }
}
