using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PgAdmin.Migrations
{
    /// <inheritdoc />
    public partial class Dostavka : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CarRoles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Role = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    IdCompany = table.Column<string>(type: "text", nullable: false),
                    Numbers = table.Column<string>(type: "text", nullable: false),
                    Type = table.Column<string>(type: "text", nullable: false),
                    Brand = table.Column<string>(type: "text", nullable: false),
                    Model = table.Column<string>(type: "text", nullable: false),
                    HorsePower = table.Column<int>(type: "integer", nullable: false),
                    NumberTransportation = table.Column<int>(type: "integer", nullable: false),
                    TransportationId = table.Column<List<string>>(type: "text[]", nullable: false),
                    TransportationOnline = table.Column<string>(type: "text", nullable: false),
                    WorkerId = table.Column<string>(type: "text", nullable: false),
                    LastWorkers = table.Column<List<string>>(type: "text[]", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Companys",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    IDLastDirectors = table.Column<List<string>>(type: "text[]", nullable: true),
                    Title = table.Column<string>(type: "text", nullable: true),
                    NameDirector = table.Column<string>(type: "text", nullable: false),
                    IdDirector = table.Column<string>(type: "text", nullable: false),
                    Registration = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: false),
                    PhoneConfirmation = table.Column<bool>(type: "boolean", nullable: true),
                    email = table.Column<string>(type: "text", nullable: false),
                    ConfirmationEmail = table.Column<bool>(type: "boolean", nullable: true),
                    Avatar = table.Column<string>(type: "text", nullable: false),
                    TrucksNumber = table.Column<int>(type: "integer", nullable: true),
                    WorkersNumber = table.Column<int>(type: "integer", nullable: true),
                    TransportationNumber = table.Column<int>(type: "integer", nullable: true),
                    SuccessfulTransportation = table.Column<int>(type: "integer", nullable: true),
                    TransportationOnline = table.Column<string>(type: "text", nullable: true),
                    PostId = table.Column<List<string>>(type: "text[]", nullable: true),
                    Rating = table.Column<double>(type: "double precision", nullable: true),
                    RoleWork = table.Column<string>(type: "text", nullable: true),
                    ReviewsId = table.Column<List<string>>(type: "text[]", nullable: true),
                    ReviewsNumbers = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companys", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Directors",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    IdCompany = table.Column<string>(type: "text", nullable: false),
                    IDLastCompany = table.Column<List<string>>(type: "text[]", nullable: true),
                    FullName = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    EmailConfirmation = table.Column<bool>(type: "boolean", nullable: true),
                    HashPassword = table.Column<string>(type: "text", nullable: false),
                    PhoneNumber = table.Column<string>(type: "text", nullable: false),
                    PhoneNumberConfirmation = table.Column<bool>(type: "boolean", nullable: true),
                    Location = table.Column<string>(type: "text", nullable: true),
                    Avatar = table.Column<string>(type: "text", nullable: false),
                    SuccessfulTransportation = table.Column<int>(type: "integer", nullable: true),
                    TruckId = table.Column<List<string>>(type: "text[]", nullable: true),
                    TransportationId = table.Column<List<string>>(type: "text[]", nullable: true),
                    WorkersId = table.Column<List<string>>(type: "text[]", nullable: true),
                    EmployeeKeys = table.Column<List<string>>(type: "text[]", nullable: true),
                    EmployeeBusKeys = table.Column<List<string>>(type: "text[]", nullable: true),
                    EmployeeUsageKeys = table.Column<List<string>>(type: "text[]", nullable: true),
                    RoleWork = table.Column<string>(type: "text", nullable: false),
                    RefreshToken = table.Column<string>(type: "text", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Directors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Image = table.Column<string>(type: "text", nullable: false),
                    Text = table.Column<string>(type: "text", nullable: false),
                    IdCompany = table.Column<string>(type: "text", nullable: false),
                    CreatAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    TypeWork = table.Column<string>(type: "text", nullable: false),
                    Role = table.Column<string>(type: "text", nullable: false),
                    IdPeople = table.Column<string>(type: "text", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Сontext = table.Column<string>(type: "text", nullable: false),
                    Rating = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Role = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Transportations",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    TrackNumber = table.Column<string>(type: "text", nullable: false),
                    IdCarriersCompany = table.Column<string>(type: "text", nullable: false),
                    IdShippersCompany = table.Column<string>(type: "text", nullable: false),
                    IdTruck = table.Column<string>(type: "text", nullable: false),
                    IdCarriersWorkers = table.Column<string>(type: "text", nullable: false),
                    IdShippersWorkers = table.Column<string>(type: "text", nullable: false),
                    From = table.Column<string>(type: "text", nullable: false),
                    Where = table.Column<string>(type: "text", nullable: false),
                    FromCoordinates = table.Column<double[]>(type: "double precision[]", nullable: false),
                    WhereCoordinates = table.Column<double[]>(type: "double precision[]", nullable: false),
                    StartDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    EndDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transportations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Workers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    idCompany = table.Column<string>(type: "text", nullable: false),
                    IDLastCompany = table.Column<List<string>>(type: "text[]", nullable: true),
                    FullName = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    EmailConfirmation = table.Column<bool>(type: "boolean", nullable: true),
                    HashPassword = table.Column<string>(type: "text", nullable: false),
                    PhoneNumber = table.Column<string>(type: "text", nullable: false),
                    PhoneNumberConfirmation = table.Column<bool>(type: "boolean", nullable: true),
                    Location = table.Column<string>(type: "text", nullable: true),
                    Avatar = table.Column<string>(type: "text", nullable: false),
                    Role = table.Column<string>(type: "text", nullable: false),
                    RoleWork = table.Column<string>(type: "text", nullable: false),
                    TransportationId = table.Column<List<string>>(type: "text[]", nullable: true),
                    TransportationNumber = table.Column<int>(type: "integer", nullable: true),
                    SuccessfulTransportation = table.Column<int>(type: "integer", nullable: true),
                    ChatsId = table.Column<List<string>>(type: "text[]", nullable: true),
                    ChatsNumber = table.Column<int>(type: "integer", nullable: true),
                    TruckId = table.Column<List<string>>(type: "text[]", nullable: true),
                    TruckNumber = table.Column<int>(type: "integer", nullable: true),
                    PublicKey = table.Column<string>(type: "text", nullable: false),
                    PrivateKey = table.Column<string>(type: "text", nullable: false),
                    CompanyKey = table.Column<string>(type: "text", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true),
                    RefreshToken = table.Column<string>(type: "text", nullable: true),
                    Rating = table.Column<double>(type: "double precision", nullable: true),
                    ReviewsId = table.Column<List<string>>(type: "text[]", nullable: true),
                    ReviewsNumbers = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Workers", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "CarRoles",
                columns: new[] { "Id", "Role" },
                values: new object[,]
                {
                    { 1, "Cargo Van" },
                    { 2, "Passenger Van" },
                    { 3, "Small Flatbed Truck" },
                    { 4, "Box Truck" },
                    { 5, "Tanker Truck" },
                    { 6, "Large Box Truck" },
                    { 7, "Small Curtain-Side Truck" },
                    { 8, "Container Truck" },
                    { 9, "Large Box Truck Container" }
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "Role" },
                values: new object[,]
                {
                    { 1, "junior logistician" },
                    { 2, "logistician" },
                    { 3, "senior logistician" },
                    { 4, "director" },
                    { 5, "Admin" },
                    { 6, "carriers" },
                    { 7, "shippers" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarRoles");

            migrationBuilder.DropTable(
                name: "Cars");

            migrationBuilder.DropTable(
                name: "Companys");

            migrationBuilder.DropTable(
                name: "Directors");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "Reviews");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "Transportations");

            migrationBuilder.DropTable(
                name: "Workers");
        }
    }
}
