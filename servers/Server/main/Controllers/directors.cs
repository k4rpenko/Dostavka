using Hash.Interface;
using main.Models.MessageChat;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB;
using Hash;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Rewrite;
using main.Modules;

namespace main.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class directors : Controller
    {
        private readonly AppDbContext context;
        private readonly IJwt _jwt; 
        private readonly IRSAHash _key;

        public directors(IJwt jwt, IRSAHash key, AppDbContext _context)
        {
            context = _context;
            _jwt = jwt;
            _key = key;
        }

        [HttpGet("Key")]
        public async Task<IActionResult> KreatKey()
        {
            if (!Request.Cookies.TryGetValue("_AT", out string cookieValue))
            {
                return Unauthorized();
            }
            var id = _jwt.GetUserIdFromToken(cookieValue);
            var Directors = await context.Directors.FirstOrDefaultAsync(u => u.Id == id);
            if(Directors == null) { return Unauthorized(); }

            var key = _key.GeneratePublicKeys();
            Directors.EmployeeKeys.Add(key); 

            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("dismiss")]
        public async Task<IActionResult> dismissWorker(WorkerData data)
        {
            if (!Request.Cookies.TryGetValue("_AT", out string cookieValue))
            {
                return Unauthorized();
            }
            var id = _jwt.GetUserIdFromToken(cookieValue);
            var Directors = await context.Directors.FirstOrDefaultAsync(u => u.Id == id);
            if (Directors == null) { return Unauthorized(); }
            var user = Directors.WorkersId.FirstOrDefault(u => u == data.Id);
            if (user == null) { return NotFound(); }

            var userDATA = await context.Workers.FirstOrDefaultAsync(u => u.Id == user);

            userDATA.idCompany = "";
            userDATA.IDLastCompany.Add(Directors.IdCompany);
            Directors.WorkersId.Remove(user);
            
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
