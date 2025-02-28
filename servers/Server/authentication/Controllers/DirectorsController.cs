using Microsoft.AspNetCore.Mvc;
using authentication.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
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
        public async Task<IActionResult> Register([FromBody] DirectorRegistrationDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _context.Directors.AnyAsync(d => d.Email == model.Email))
            {
                return BadRequest(new { message = "Email is already in use." });
            }

            var director = new Directors
            {
                FullName = model.FullName,
                IdCompany = Guid.NewGuid().ToString(),
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
                HashPassword = BCrypt.Net.BCrypt.HashPassword(model.Password),
                Location = model.CompanyNameAndAddress,
                EmployeeKeys = new List<string> { Guid.NewGuid().ToString() }
            };

            try
            {
                _context.Directors.Add(director);
                await _context.SaveChangesAsync();

                return Ok(new { message = "Director registered successfully!" });
            }
            catch
            {
                return StatusCode(500, new { message = "An error occurred while registering the director." });
            }
        }
    }
}