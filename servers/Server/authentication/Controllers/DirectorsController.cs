using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PGAdminDAL;
using PgAdmin.Model;
using Hash.Interface;
using System.Collections.Generic;
using System.Threading.Tasks;
using Authentication.Extensions;


namespace authentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectorsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IArgon2Hasher _hasher;
        private readonly IJwt _jwt;
        private readonly IConfiguration _configuration;

        public DirectorsController(AppDbContext context, IArgon2Hasher hasher, IJwt jwt, IConfiguration configuration)
        {
            _context = context;
            _hasher = hasher;
            _jwt = jwt;
            _configuration = configuration;
        }

        // GET: api/Directors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Directors>>> GetDirectors()
        {
            return await _context.Directors.ToListAsync();
        }

        // GET: api/Directors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Directors>> GetDirector(string id)
        {
            var director = await _context.Directors.FindAsync(id);

            if (director == null)
            {
                return NotFound();
            }

            return director;
        }

        // POST: api/Directors
        [HttpPost]
        public async Task<ActionResult<Directors>> PostDirector(Directors director)
        {
            director.HashPassword = _hasher.Hash(director.HashPassword);
            _context.Directors.Add(director);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDirector", new { id = director.Id }, director);
        }

        // PUT: api/Directors/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDirector(string id, Directors director)
        {
            if (id != director.Id)
            {
                return BadRequest();
            }

            _context.Entry(director).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DirectorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Directors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDirector(string id)
        {
            var director = await _context.Directors.FindAsync(id);
            if (director == null)
            {
                return NotFound();
            }

            _context.Directors.Remove(director);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var director = await _context.Directors.FirstOrDefaultAsync(d => d.Email == request.Email);
            if (director == null || !_hasher.Verify(request.Password, director.HashPassword))
                return Unauthorized("Невірний email або пароль!");

            string jwtKey = _configuration["Jwt:Key"] ?? throw new InvalidOperationException("Jwt:Key is not configured");
            int jwtHours = int.Parse(_configuration["Jwt:ExpirationHours"] ?? "24");
            string token = _jwt.GenerateJwtToken(director.Id.ToString(), jwtKey, jwtHours, "director");
            return Ok(new { Token = token });
        }

        private bool DirectorExists(string id)
        {
            return _context.Directors.Any(e => e.Id == id);
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}