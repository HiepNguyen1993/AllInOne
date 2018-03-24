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
using Web.Core.AppService.DTO;
using Web.Core.AppService.Models;
using Web.Core.AppService.ServiceContracts.Query;

namespace Web.Core.API.Controllers
{
    [Authorize]
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly IAccountQueryService _accountQueryService;
        private readonly IConfiguration _configuration;

        public AccountController(
            IAccountQueryService accountQueryService,
            IConfiguration configuration)
        {
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
                    result = new
                    {
                        token = token,
                        info = new
                        {
                            name = result.Name,
                            id = result.Id,
                            email = result.Email
                        }
                    }
                });
            }

            return BadRequest("Could not verify username and password");
        }

        [Authorize]
        [HttpGet("isLogin")]
        public IActionResult IsLogin()
        {
            return Ok(true);
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var userList = await _accountQueryService.GetAllUser();
            return Json(new
            {
                data = userList,
                itemsCount = userList.Count
            });
        }

        [HttpGet("GetbyId")]
        public async Task<IActionResult> GetById([FromQuery]long id)
        {
            var item = await _accountQueryService.GetUserById(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        private async Task<object> GenerateJwtToken(Account user)
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

        [AllowAnonymous]
        [HttpPost("insert-account")]
        public async Task<IActionResult> InsertAccount([FromBody] AccountRequestDTO request)
        {
            Account _account = new Account();
            _account.CreateDate = DateTime.Now;
            _account.UpdateDate = DateTime.Now;
            _account.Name = request.Name;
            _account.Login = request.Login;
            _account.IsActive = true;
            _account.Password = request.Password;
            _account.Phone = request.Phone;
            _account.Gender = request.Gender;
            _account.Address = request.Address;


            bool result = await _accountQueryService.InsertAccount(_account);
            if (result)
            {
                return Ok(new
                {
                    status = "success"
                });
            }

            return BadRequest("Error");
        }

        [AllowAnonymous]
        [HttpPost("update-account")]
        public async Task<IActionResult> UpdateAccount([FromBody] AccountRequestDTO request)
        {
            Account _account = new Account();
            _account.Id = request.Id;
            _account.UpdateDate = DateTime.Now;
            _account.Name = request.Name;
            _account.IsActive = request.IsActive;
            _account.Password = request.Password;
            _account.Phone = request.Phone;
            _account.Gender = request.Gender;
            _account.Address = request.Address;


            bool result = await _accountQueryService.UpdateAccount(_account);
            if (result)
            {
                return Ok(new
                {
                    status = "success"
                });
            }

            return BadRequest("Error");
        }

        [HttpGet("get-account-list")]
        public async Task<IActionResult> GetAccountList([FromQuery] CustomerRequestDTO customerRequest)
        {
            var accList = await _accountQueryService.GetAllUser();
            return Json(new
            {
                data = accList,
                itemsCount = accList.Count
            });
        }

        [HttpGet("get-account-by-id")]
        public async Task<IActionResult> GetCustomerById([FromQuery] long Id)
        {
            var acc = await _accountQueryService.GetUserById(Id);
            if (acc == null)
            {
                return NotFound();
            }
            return Ok(acc);
        }
    }
}