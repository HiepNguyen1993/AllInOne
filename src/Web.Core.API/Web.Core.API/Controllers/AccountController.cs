using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Web.Core.AppService.Domain;
using Web.Core.AppService.DTO;
using Web.Core.AppService.Models;

namespace Web.Core.API.Controllers
{
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly WebDbContext _context;
        public AccountController(WebDbContext context)
        {
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public IActionResult RequestToken([ModelBinder] LoginRequestDTO request)
        {
            if (request.Username == "hiep" && request.Password == "hiep")
            {
                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, request.Username)
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is my custom Secret key for authnetication"));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "http://localhost:5000",
                    audience: "http://localhost:4200",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }

            return BadRequest("Could not verify username and password");
        }

        [Authorize]
        [HttpGet]
        public IEnumerable<Account> GetAll()
        {
            return _context.Account.ToList();
        }

        [HttpGet("GetbyId")]
        public IActionResult GetById([FromQuery]long id)
        {
            var item = _context.Account.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
    }
}