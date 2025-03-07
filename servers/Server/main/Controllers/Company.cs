using Hash.Interface;
using main.Modules;
using main.Modules.Chat;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PgAdmin.Model;
using System.Text.RegularExpressions;

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
            var companies = await context.Companys.ToListAsync();

            var cleanName = Regex.Replace(NAME, @"[^a-zA-Zа-яА-Я0-9]", "").ToLower();

            var company = companies.FirstOrDefault(u => Regex.Replace(u.Title, @"[^a-zA-Zа-яА-Я0-9]", "").ToLower() == cleanName);

            if (company == null) { return NotFound(); }
            var postrsData = await context.Posts.FirstOrDefaultAsync(u => u.IdCompany == company.Id);
            var data = new CompanysModel
            {
                Id = company.Id,
                Title = company.Title,
                PhoneNumber = company.PhoneNumber,
                background = company.background,
                description = company.description,
                email = company.email,
                Avatar = company.Avatar,
                TransportationNumber = company.TransportationNumber,
                Rating = company.Rating,
                ReviewsNumbers = company.ReviewsNumbers,
                Posts = new List<Posts> 
                {
                    new Posts
                    {
                        Id = postrsData.Id,
                        Text = postrsData.Text,
                        Image = postrsData.Image,
                        CreatAt = postrsData.CreatAt
                    }
                }
            };
            

            return Ok(new { DATA = data });
        }

        [HttpGet("carriers")]
        public async Task<IActionResult> GetAllCompanies()
        {
            try
            {
                var companies = await context.Companys
                    .Where(c => c.RoleWork == "carriers")
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

                return Ok(companies);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}

