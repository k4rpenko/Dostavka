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


    }
}
