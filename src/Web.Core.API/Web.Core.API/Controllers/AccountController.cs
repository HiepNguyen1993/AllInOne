using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Web.Core.AppService.Domain;
using Web.Core.AppService.DTO;
using Web.Core.AppService.Models;
using Web.Core.AppService.ServiceContracts.Query;

namespace Web.Core.API.Controllers
{
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly WebDbContext _context;
        private readonly IAccountQueryService _accountQueryService;
        private readonly IConfiguration _configuration;

        public AccountController(
            WebDbContext context,
            IAccountQueryService accountQueryService,
            IConfiguration configuration)
        {
            _context = context;
            _accountQueryService = accountQueryService;
            _configuration = configuration;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> RequestToken([FromBody] LoginRequestDTO request)
        {
            var result = await _accountQueryService.ValidateUser(request.Username, request.Password);
            if (result != null)
            {
                var token = await GenerateJwtToken(result);
                return Ok(new
                {
                    status = "success",
                    result = token
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

        private async Task<object> GenerateJwtToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Name),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Name)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                _configuration["JwtIssuer"],
                _configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}