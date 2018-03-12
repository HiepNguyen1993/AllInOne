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
        private readonly ICustomerQueryService _customerQueryService;
        private readonly IConfiguration _configuration;

        public CustomerController(
            ICustomerQueryService customerQueryService,
            IConfiguration configuration)
        {
            _customerQueryService = customerQueryService;
            _configuration = configuration;
        }

        [HttpGet("get-customer-list")]
        public async Task<IActionResult> GetCustomerList([FromQuery] CustomerRequestDTO customerRequest)
        {
            var customerList = await _customerQueryService.GetAllCustomer();
            return Json(new
            {
                data = customerList,
                itemsCount = customerList.Count
            });
        }

     
    }
}