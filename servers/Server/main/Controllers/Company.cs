using Hash.Interface;
using main.Modules;
using main.Modules.Chat;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PgAdmin.Model;

namespace main.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Company : ControllerBase
    {
        private readonly AppDbContext context;
        private readonly IJwt _jwt;

        public Company(IJwt jwt, AppDbContext _context)
        {
            context = _context;
            _jwt = jwt;
        }

        [HttpGet("Company/{NAME}")]
        public async Task<IActionResult> GetCompany(string NAME)
        {
            var company = await context.Companys.FirstOrDefaultAsync(u => u.Title.ToLower() == NAME.ToLower()); 

            if (company == null) { return NotFound(); }
            var data = new CompanysModel
            {
                Id = company.Id,
                Title = company.Title,
                PhoneNumber = company.PhoneNumber,
                email = company.email,
                Avatar = company.Avatar,
                Rating = company.Rating,
                ReviewsNumbers = company.ReviewsNumbers,
            };
            

            return Ok(new { DATA = data });
        }
    }
}
