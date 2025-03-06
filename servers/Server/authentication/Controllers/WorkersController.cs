using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PgAdmin.Model;
using System.Threading.Tasks;

namespace main.Controllers
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
            _context.Workers.Add(worker);
            await _context.SaveChangesAsync();

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

        private bool WorkerExists(string id)
        {
            return _context.Workers.Any(e => e.Id == id);
        }
    }
}
