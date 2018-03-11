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
    [Route("api/Customer")]
    public class CustomerController : Controller
    {
        private readonly IAccountQueryService _accountQueryService;
        private readonly IConfiguration _configuration;

        public CustomerController(
            IAccountQueryService accountQueryService,
            IConfiguration configuration)
        {
            _accountQueryService = accountQueryService;
            _configuration = configuration;
        }

        [HttpGet("get-customer-list")]
        public async Task<IActionResult> GetCustomerList([FromQuery] CustomerRequestDTO customerRequest)
        {
            
            return BadRequest("Could not verify username and password");
        }

     
    }
}