using Hash.Interface;
using main.Modules;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PgAdmin.Model;
using PGAdminDAL.Model;

namespace main.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Admin : ControllerBase
    {
        private readonly AppDbContext context;
        private readonly IJwt _jwt;

        public Admin(IJwt jwt, AppDbContext _context)
        {
            context = _context;
            _jwt = jwt;
        }

        [HttpPost("ChangeCar")]
        public async Task<IActionResult> ChangeCar(AdminModule a)
        {
            if (!Request.Cookies.TryGetValue("_ADT", out string cookieValue))
            {
                return Unauthorized();
            }
            var id = _jwt.GetUserIdFromToken(cookieValue);
            var car = await context.Cars.FirstOrDefaultAsync(u => u.Id == a.CarId);

            if (car == null || car.IdCompany == a.CompanyTwoID)
            {
                return BadRequest("Invalid data.");
            }

            car.IdCompany = a.CompanyTwoID;
            await context.SaveChangesAsync();
            return Ok();

        }
    }
}
