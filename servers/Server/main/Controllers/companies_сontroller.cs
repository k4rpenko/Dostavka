using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PgAdmin.Model;
using System.Threading.Tasks;

namespace main.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class companies : ControllerBase
    {
        private readonly AppDbContext _context;

        public companies(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCompanies()
        {
            try
            {
                var companies = await _context.Companys
                    .Where(c => c.Role == "7")
                    .Select(c => new {
                        c.Id,
                        c.Title,
                        c.Avatar,
                        c.Rating,
                        c.WorkersNumber,
                        c.TransportationNumber,
                        c.SuccessfulTransportation,
                        c.email,
                        c.PhoneNumber
                    })
                    .ToListAsync();

                return Ok(new { DATA = companies });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompanyById(string id)
        {
            try
            {
                var company = await _context.Companys.FirstOrDefaultAsync(c => c.Id == id);
                if (company == null)
                {
                    return NotFound();
                }
                return Ok(company);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
