using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PGAdminDAL;
using PgAdmin.Model;
using Hash.Interface;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using System.Linq;
using authentication.Models;

namespace authentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkersController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IArgon2Hasher _hasher;
        private readonly IJwt _jwt;
        private readonly IConfiguration _configuration;

        public WorkersController(AppDbContext context, IArgon2Hasher hasher, IJwt jwt, IConfiguration configuration)
        {
            _context = context;
            _hasher = hasher;
            _jwt = jwt;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Workers>>> GetWorkers()
        {
            return await _context.Workers.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Workers>> GetWorker(string id)
        {
            var worker = await _context.Workers.FindAsync(id);

            if (worker == null)
            {
                return NotFound();
            }

            return worker;
        }

        [HttpPost]
        public async Task<ActionResult<Workers>> PostWorker(Workers worker)
        {
            worker.HashPassword = _hasher.Hash(worker.HashPassword);
            _context.Workers.Add(worker);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (WorkerExists(worker.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetWorker", new { id = worker.Id }, worker);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorker(string id, Workers worker)
        {
            if (id != worker.Id)
            {
                return BadRequest();
            }

            _context.Entry(worker).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkerExists(id))
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorker(string id)
        {
            var worker = await _context.Workers.FindAsync(id);
            if (worker == null)
            {
                return NotFound();
            }

            _context.Workers.Remove(worker);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var worker = await _context.Workers.FirstOrDefaultAsync(w => w.Email == request.Email);
            if (worker == null || !_hasher.Verify(request.Password, worker.HashPassword))
                return Unauthorized("Невірний email або пароль!");

            string jwtKey = _configuration["Jwt:Key"] ?? throw new InvalidOperationException("Jwt:Key is not configured");
            int jwtHours = int.Parse(_configuration["Jwt:ExpirationHours"] ?? "24");
            string token = _jwt.GenerateJwtToken(worker.Id.ToString(), jwtKey, jwtHours, "worker");
            return Ok(new { Token = token });
        }

        private bool WorkerExists(string id)
        {
            return _context.Workers.Any(e => e.Id == id);
        }
    }
}