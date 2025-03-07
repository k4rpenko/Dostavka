using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PgAdmin.Model;
using PGAdminDAL.Model;

public class AppDbContext : DbContext
{
    private readonly IConfiguration _configuration;

    public AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration configuration)
        : base(options)
    {
        _configuration = configuration;
    }

    public DbSet<Posts> Posts { get; set; }
    public DbSet<CarRoles> CarRoles { get; set; }
    public DbSet<Cars> Cars { get; set; }
    public DbSet<Review> Reviews { get; set; }
    public DbSet<Companys> Companys { get; set; }
    public DbSet<Directors> Directors { get; set; }
    public DbSet<Workers> Workers { get; set; }
    public DbSet<Transportation> Transportations { get; set; }
    public DbSet<Roles> Roles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseNpgsql(_configuration.GetConnectionString("DefaultConnection"));
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<CarRoles>().HasData(
            new CarRoles { Id = 1, Role = "Cargo Van" },
            new CarRoles { Id = 2, Role = "Passenger Van" },
            new CarRoles { Id = 3, Role = "Small Flatbed Truck" },
            new CarRoles { Id = 4, Role = "Box Truck" },
            new CarRoles { Id = 5, Role = "Tanker Truck" },
            new CarRoles { Id = 6, Role = "Large Box Truck" },
            new CarRoles { Id = 7, Role = "Small Curtain-Side Truck" },
            new CarRoles { Id = 8, Role = "Container Truck" },
            new CarRoles { Id = 9, Role = "Large Box Truck Container" }
        );


        modelBuilder.Entity<Roles>().HasData(
            new Roles { Id = 1, Role = "junior logistician" },
            new Roles { Id = 2, Role = "logistician" },
            new Roles { Id = 3, Role = "senior logistician" },
            new Roles { Id = 4, Role = "director" },
            new Roles { Id = 5, Role = "Admin" },
            new Roles { Id = 6, Role = "carriers" },
            new Roles { Id = 7, Role = "shippers" }
        );
    }
}