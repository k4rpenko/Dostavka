using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PgAdmin.Model;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace PgAdmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CompaniesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCompanies()
        {
            try
            {
                var companies = await _context.Companys.ToListAsync();

                if (companies == null || !companies.Any())
                {
                    return NotFound("Компанії не знайдені");
                }

                return Ok(companies);
            }
            catch (Exception ex)
            {
                return BadRequest($"Помилка при отриманні компаній: {ex.Message}");
            }
        }
    }
}
