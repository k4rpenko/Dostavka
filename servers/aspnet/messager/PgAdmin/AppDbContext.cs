using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PGAdminDAL.Model;

public class AppDbContext : IdentityDbContext
{
    private readonly IConfiguration _configuration;

    public AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration configuration)
        : base(options)
    {
        _configuration = configuration;
    }

    public DbSet<CarriersCompany> CarriersCompanies { get; set; }
    public DbSet<CarriersDirector> CarriersDirectors { get; set; }
    public DbSet<CarriersWorkers> CarriersWorkers { get; set; }
    public DbSet<CarRoles> CarRoles { get; set; }
    public DbSet<CarsCompany> CarsCompanies { get; set; }
    public DbSet<Review> Reviews { get; set; }
    public DbSet<ReviewCompany> ReviewCompanies { get; set; }
    public DbSet<ShippersCompany> ShippersCompanies { get; set; }
    public DbSet<ShippersDirector> ShippersDirectors { get; set; }
    public DbSet<ShippersWorkers> ShippersWorkers { get; set; }
    public DbSet<Transportation> Transportations { get; set; }
    public DbSet<Roles> WorkerRoles { get; set; }

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
            new Roles { Role = "junior logistician" },
            new Roles { Role = "logistician" },
            new Roles { Role = "senior logistician" },
            new Roles { Role = "director" },
            new Roles { Role = "Admin" }
        );
    }
}