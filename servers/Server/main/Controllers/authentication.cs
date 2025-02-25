using Hash.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PgAdmin.Model;

namespace main.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class authenticator : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IArgon2Hasher _IA2;

        public authenticator(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register/directors")]
        public async Task<IActionResult> RegisterDirectors(Directors director)
        {
            var user = _context.Directors.FirstOrDefault(u => u.Email == director.Email);
            if (user != null)
            {
                if (user.EmailConfirmation == false)
                {
                    return BadRequest();
                }
                return Conflict();
            }
                

            director.HashPassword = _IA2.Encrypt(director.HashPassword, "NONE");

            _context.Directors.Add(director);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Registration successful!" });
        }

        /*
        [HttpPost("register/worker")]
        public async Task<IActionResult> RegisterWorker()
        {

        }
        */
    }
}
