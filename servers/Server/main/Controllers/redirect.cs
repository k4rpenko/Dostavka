using Hash.Interface;
using main.Models.MessageChat;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB;
using Hash;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Rewrite;

namespace main.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class redirect : Controller
    {
        private readonly AppDbContext context;
        private readonly IJwt _jwt;

        public redirect(IJwt jwt, AppDbContext _context)
        {
            context = _context;
            _jwt = jwt;
        }

        [HttpGet("job")]
        public async Task<IActionResult> job()
        {
            if (!Request.Cookies.TryGetValue("_AT", out string cookieValue))
            {
                return Ok(new { redirectUrl = "http://localhost:3000/home" });
            }
            if (!_jwt.ValidateToken(cookieValue, context))
            {
                return Ok(new { redirectUrl = "http://localhost:3000/login/worker" });
            }

            var id = _jwt.GetUserIdFromToken(cookieValue);
            var worker = await context.Workers.FirstOrDefaultAsync(u => u.Id == id);
            if(worker == null)
            {
                var director = await context.Directors.FirstOrDefaultAsync(u => u.Id == id);
                if(director == null)
                {
                    return NotFound();
                }
                return Ok(new { redirectUrl = "http://localhost:3000/login/worker" });
            }
            var Company = await context.Companys.FirstOrDefaultAsync(u => u.Id == worker.idCompany);
            if(Company.RoleWork == "7")
            {
                return Ok(new { redirectUrl = "http://localhost:3000/shippers" });
            }
            else if (Company.RoleWork == "6")
            {
                return Ok(new { redirectUrl = "http://localhost:3000/carriers" });
            }
            else
            {
                return NotFound();
            }
        }
    }
}
