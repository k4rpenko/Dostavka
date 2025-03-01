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
    public class WorkersController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IArgon2Hasher _hasher;

        public WorkersController(AppDbContext context, IArgon2Hasher hasher)
        {
            _context = context;
            _hasher = hasher;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterWorker([FromBody] Workers worker)
        {
            if (await _context.Workers.AnyAsync(w => w.Email == worker.Email))
            {
                return Conflict(new { message = "Email is already in use." });
            }

            worker.HashPassword = _hasher.Encrypt(worker.HashPassword, "SALT_VALUE");

            _context.Workers.Add(worker);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Registration successful." });
        }
    }
}
