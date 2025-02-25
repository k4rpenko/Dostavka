using Microsoft.AspNetCore.Mvc;
using authentication.Models;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;

namespace authentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectorsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DirectorsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(Directors director)
        {
            if (await _context.Directors.AnyAsync(d => d.Email == director.Email))
                return BadRequest(new { message = "Email is already in use." });

            director.HashPassword = BCrypt.Net.BCrypt.HashPassword(director.HashPassword);

            _context.Directors.Add(director);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Registration successful!" });
        }
    }
}
