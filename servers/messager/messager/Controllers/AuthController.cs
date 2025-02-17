
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

namespace AuthServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Auth : Controller
    {
        

        [HttpPost("Test")]
        public async Task<IActionResult> Test()
        {
            return Ok();
        }
    }
}
