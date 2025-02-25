using Hash;
using Hash.Interface;
using main.Modules;
using main.protection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PgAdmin.Model;
using System.Threading.Tasks;

namespace main.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class workers : Controller
    {
        
        private readonly AppDbContext context;
        private readonly IJwt _jwt;
        private readonly HashMessages _HM;
        private readonly IConfiguration _configuration; 

        public workers(IJwt jwt, AppDbContext _context, IConfiguration configuration)
        {
            context = _context;
            _jwt = jwt;
            _configuration = configuration;
        }

        [HttpPost("set-cookie/{NAME}")]
        public IActionResult SetCookie(string NAME)
        {
            string token;
            if (NAME == "carriers")
            {
                token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiZGY5OTU0Mi01ODkxLTRiZmItYWE5Ny0wZTI5Mzg3Mzg3MzgiLCJleHAiOjE3NDE1NjQ4MDB9.WSOEAZnSQXNHjGgus8XgJV16UjY8Rqvie_m8OJ-DR3g";
            }
            else if (NAME == "shippers")
            {
                token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NDhiY2QyNi0zNWVhLTQ2ODctODFmMi02YmM3MzFiMWRlY2QiLCJleHAiOjE3NDE1NjQ4MDB9.8l7yC1ay0Y2s9tZwz7LrSTdiJUmN2EiCOtceuNpe9nY";
            }
            else
            {
                return NotFound();
            }

            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None
            };
            Response.Cookies.Append("_AT", token, cookieOptions);
            return Ok();
        }

        [HttpGet("data")]
        public async Task<IActionResult> GetAllData()
        {
            if (!Request.Cookies.TryGetValue("_AT", out string cookieValue))
            {
                return Unauthorized();
            }
            if (!_jwt.ValidateToken(cookieValue, context))
            {
                return Unauthorized();
            }

            var id = _jwt.GetUserIdFromToken(cookieValue);
            var worker = await context.Workers.FirstOrDefaultAsync(u => u.Id == id);
            if(worker == null)
            {
                return Unauthorized();
            }

            WorkerData res = new WorkerData
            {
                Id = worker.Id,
                idCompany = worker.idCompany,
                IDLastCompany = worker.IDLastCompany,
                FullName = worker.FullName,
                Email = worker.Email,
                EmailConfirmation = worker.EmailConfirmation,
                HashPassword = worker.HashPassword,
                PhoneNumber = worker.PhoneNumber,
                PhoneNumberConfirmation = worker.PhoneNumberConfirmation,
                Location = worker.Location,
                Avatar = worker.Avatar,
                Role = worker.Role,
                RoleWork = worker.RoleWork,
                TransportationId = worker.TransportationId,
                TransportationNumber = worker.TransportationNumber,
                SuccessfulTransportation = worker.SuccessfulTransportation,
                ChatsId = worker.ChatsId,
                ChatsNumber = worker.ChatsNumber,
                TruckId = worker.TruckId,
                TruckNumber = worker.TruckId?.Count,
                PublicServerKey = _configuration.GetSection("KEYS:Public").Value,
                PublicKey = worker.PublicKey,
                PrivateKey = worker.PrivateKey,
                CompanyKey = worker.CompanyKey,
                RefreshToken = worker.RefreshToken,
                Rating = worker.Rating,
                ReviewsId = worker.ReviewsId,
                ReviewsNumbers = worker.ReviewsId?.Count
            };

            var (key, iv, tag) = ConfigLoader.LoadEncryptionConfig();
            string encryptedJson = _HM.HashEncryptObject(worker, key, iv, tag);

            return Ok(new { WorkerData = encryptedJson });
        }
    }
}
