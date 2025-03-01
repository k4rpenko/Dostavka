using Hash.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PgAdmin;
using PgAdmin.Model;
using System.Threading.Tasks;

namespace authentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectorsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IArgon2Hasher _hasher;

        public DirectorsController(AppDbContext context, IArgon2Hasher hasher)
        {
            _context = context;
            _hasher = hasher;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterDirector([FromBody] Directors director)
        {
            if (await _context.Directors.AnyAsync(d => d.Email == director.Email))
            {
                return Conflict(new { message = "Email is already in use." });
            }

            director.HashPassword = _hasher.Encrypt(director.HashPassword, "SALT_VALUE");

            _context.Directors.Add(director);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Registration successful." });
        }
    }
}
