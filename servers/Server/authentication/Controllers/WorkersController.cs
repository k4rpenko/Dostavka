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
    public class WorkersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public WorkersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Worker model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _context.Workers.AnyAsync(w => w.Email == model.Email))
            {
                return BadRequest(new { message = "Email is already in use." });
            }

            var director = await _context.Directors.FirstOrDefaultAsync(d => d.EmployeeKeys.Contains(model.CompanyKey));
            if (director == null)
            {
                return BadRequest(new { message = "Invalid company key." });
            }

            model.IdCompany = director.IdCompany;
            model.HashPassword = BCrypt.Net.BCrypt.HashPassword(model.HashPassword);

            try
            {
                _context.Workers.Add(model);
                await _context.SaveChangesAsync();

                return Ok(new { message = "Worker registered successfully!" });
            }
            catch
            {
                return StatusCode(500, new { message = "An error occurred while registering the worker." });
            }
        }
    }
}