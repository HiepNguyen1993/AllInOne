using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
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
            _customer.Phone = request.Phone;
            _customer.delFlag = false;
            _customer.Gender = request.Gender;

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

        [AllowAnonymous]
        [HttpPost("update-customer")]
        public async Task<IActionResult> UpdateCustomer([FromBody] CustomerRequestDTO request)
        {
            Customer _customer = new Customer();
            _customer.Id = request.Id;
            _customer.UpdateDate = DateTime.Now;
            _customer.Fullname = request.Fullname;
            _customer.Address = request.Address;
            _customer.Email = request.Email;
            _customer.Phone = request.Phone;
            _customer.delFlag = false;
            _customer.Gender = request.Gender;

            //validUser = Mapper.Map(isValidUser, validUser);

            bool result = await _customerQueryService.UpdateCustomer(_customer);
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