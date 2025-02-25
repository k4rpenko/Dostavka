using Microsoft.EntityFrameworkCore;
using authentication.Models;

namespace authentication
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<Directors> Directors { get; set; }
    }
}
