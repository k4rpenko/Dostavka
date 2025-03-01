using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PGAdminDAL.Model;
using System;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class CarsController : ControllerBase
{
    private readonly AppDbContext _context;

    public CarsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("add")]
    public async Task<IActionResult> AddCar([FromBody] CarsCompany car)
    {
        if (car == null)
        {
            return BadRequest("Invalid car data.");
        }

        car.Id = Guid.NewGuid().ToString();
        car.CreatedAt = DateTime.UtcNow;

        _context.CarsCompanies.Add(car);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetCarById), new { id = car.Id }, car);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCarById(string id)
    {
        var car = await _context.CarsCompanies.FindAsync(id);
        if (car == null)
        {
            return NotFound();
        }
        return Ok(car);
    }
}
