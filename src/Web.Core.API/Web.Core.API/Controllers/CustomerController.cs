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

        [HttpGet("get-customer-by-id")]
        public async Task<IActionResult> GetById([FromQuery]long id)
        {
            var item = await _customerQueryService.GetUserById(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
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

        [AllowAnonymous]
        [HttpPost("insert-customer")]
        public async Task<IActionResult> InsertCustomer([FromBody] CustomerRequestDTO request)
        {
            Customer _customer = new Customer();
            _customer.CreateDate = DateTime.Now;
            _customer.UpdateDate = DateTime.Now;
            _customer.Fullname = request.Fullname;
            _customer.Address = request.Address;
            _customer.Email = request.Email;
            _customer.Phone = request.Phonenumer;
            _customer.delFlag = false;
            _customer.Gender = false;

            bool result = await _customerQueryService.InsertCustomer(_customer);
            if (result)
            {
                return Ok(new
                {
                    status = "success"
                });
            }

            return BadRequest("Error");
        }

    }
}