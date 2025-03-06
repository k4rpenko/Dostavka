using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PgAdmin.Model;
using System.Threading.Tasks;

namespace main.Controllers
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Directors>>> GetDirectors()
        {
            return await _context.Directors.ToListAsync();
        }

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

        [HttpPost]
        public async Task<ActionResult<Directors>> PostDirector(Directors director)
        {
            try
            {
                _context.Directors.Add(director);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetDirector", new { id = director.Id }, director);
            }
            catch (Exception ex)
            {
                // Log the exception details
                Console.WriteLine($"Error creating director: {ex.Message}");
                Console.WriteLine($"Stack Trace: {ex.StackTrace}");
                return StatusCode(500, "An error occurred while creating the director. Please check the server logs for more details.");
            }
        }

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

        private bool DirectorExists(string id)
        {
            return _context.Directors.Any(e => e.Id == id);
        }
    }
}
