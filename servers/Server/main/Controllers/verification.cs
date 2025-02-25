using Hash;
using Hash.Interface;
using main.Models.MessageChat;
using Microsoft.AspNetCore.Mvc;
using MongoDB;
using MongoDB.Driver;

namespace main.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class verification : Controller
    {
        private readonly AppDbContext context;
        private readonly IJwt _jwt;

        public verification(IJwt jwt, AppDbContext _context)
        {
            context = _context;
            _jwt = jwt;
        }

        [HttpGet("token")]
        public async Task<IActionResult> token()
        {
            if (!Request.Cookies.TryGetValue("_AT", out string cookieValue))
            {
                return Unauthorized();
            }
            if (!_jwt.ValidateToken(cookieValue, context))
            {
                return Unauthorized();
            }

            return Ok();
        }

        [HttpPost("set-cookie/{NAME}")]
        public IActionResult SetCookie(string NAME)
        {
            string token;
            if(NAME == "carriers")
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
    }
}
