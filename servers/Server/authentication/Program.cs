using Hash.Interface;
using Hash;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddJsonFile("appsettings.Development.json", optional: true, reloadOnChange: true);

Console.WriteLine($"Environment: {builder.Environment.EnvironmentName}");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("Npgsql")));

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Authentication API", Version = "v1" });
});

builder.Services.AddSignalR();

builder.Services.AddScoped<IArgon2Hasher, Argon2Hasher>();
builder.Services.AddScoped<IJwt, JWT>();
builder.Services.AddScoped<IHASH256, HASH256>();
builder.Services.AddScoped<IRSAHash, RSAHash>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder
            .WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());
});

builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
        ValidateIssuer = false,
        ValidateAudience = false,
        ClockSkew = TimeSpan.Zero
    };
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    try
    {
        context.Database.OpenConnection();
        context.Database.CloseConnection();
        Console.WriteLine("Database connection successful!");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Database connection failed: {ex.Message}");
    }
}

app.Urls.Add("https://localhost:5001");
app.Urls.Add("http://localhost:5000");

app.UseRouting();

app.UseCors("AllowSpecificOrigin");

app.UseAuthentication();
app.UseAuthorization();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Authentication API V1");
    c.RoutePrefix = "swagger";
});

app.UseExceptionHandler("/Error");
app.UseHsts();

app.MapControllers();

app.MapMethods("/api/{**any}", new[] { "OPTIONS" }, (HttpContext context) =>
{
    context.Response.Headers.Append("Access-Control-Allow-Origin", "http://localhost:3000");
    context.Response.Headers.Append("Access-Control-Allow-Headers", "Content-Type,Authorization");
    context.Response.Headers.Append("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    return Task.CompletedTask;
});

await app.RunAsync();