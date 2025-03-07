using Hash;
using Hash.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PGAdminDAL.Model;
using System;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class cars : ControllerBase
{
    private readonly AppDbContext context;
    private readonly IJwt _jwt;

    public cars(IJwt jwt, AppDbContext _context)
    {
        context = _context;
        _jwt = jwt;
    }

    [HttpPost("add")]
    public async Task<IActionResult> AddCar(Cars car)
    {
        if (!Request.Cookies.TryGetValue("_AT", out string cookieValue))
        {
            return Unauthorized();
        }
        var id = _jwt.GetUserIdFromToken(cookieValue);
        var Directors = await context.Directors.FirstOrDefaultAsync(u => u.Id == id);

        if (car == null || Directors == null)
        {
            return BadRequest("Invalid car data.");
        }
        var CAR = await context.Cars.FirstOrDefaultAsync(u => u.Numbers.ToLower() == car.Numbers.ToLower());
        if (CAR != null)
        {
            return Conflict(new { message = "A car with this license plate already exists." });
        }

        car.CreatedAt = DateTime.UtcNow;

        Directors.TruckId.Add(car.Id);
        context.Cars.Add(car);
        await context.SaveChangesAsync();

        return Ok();
    }

    [HttpPut("Eddit")]
    public async Task<IActionResult> EdditCar(Cars car)
    {
        if (!Request.Cookies.TryGetValue("_AT", out string cookieValue))
        {
            return Unauthorized();
        }

        var id = _jwt.GetUserIdFromToken(cookieValue);
        var Directors = await context.Directors.FirstOrDefaultAsync(u => u.Id == id);
        var CAR = await context.Cars.FirstOrDefaultAsync(u => u.Id == car.Id);

        if (car == null || Directors == null || CAR == null || !Directors.TruckId.Contains(car.Id))
        {
            return BadRequest("Invalid car data.");
        }

        CAR = car;
        await context.SaveChangesAsync();

        return Ok();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCarById(string id)
    {
        var car = await context.Cars.FindAsync(id);
        if (car == null)
        {
            return NotFound();
        }
        return Ok(car);
    }
}
