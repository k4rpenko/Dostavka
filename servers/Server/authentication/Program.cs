using Hash;
using Hash.Interface;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("Npgsql:ConnectionString")));

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

var app = builder.Build();

app.Urls.Add("https://localhost:5001");
app.Urls.Add("http://localhost:5000");

app.UseRouting();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Authentication API V1");
    c.RoutePrefix = "swagger";
});

app.UseExceptionHandler("/Error");
app.UseHsts();


app.UseCors("AllowSpecificOrigin");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapMethods("/api/{**any}", new[] { "OPTIONS" }, (HttpContext context) =>
{
    context.Response.Headers.Append("Access-Control-Allow-Origin", "http://localhost:3000");
    context.Response.Headers.Append("Access-Control-Allow-Headers", "Content-Type,Authorization");
    context.Response.Headers.Append("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    return Task.CompletedTask;
});

await app.RunAsync();
