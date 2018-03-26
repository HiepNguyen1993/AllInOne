using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Web.Core.AppService.DTO;
using Web.Core.AppService.ServiceContracts.Query;
using Web.Core.AppService.Models;
using AutoMapper;

namespace Web.Core.API.Controllers
{
    [Route("api/Package")]
    public class PackageController : Controller
    {
        private readonly IPackageQueryService _packageQueryService;

        public PackageController(
            IPackageQueryService packageQueryService)
        {
            _packageQueryService = packageQueryService;
        }

        [AllowAnonymous]
        [HttpPost("insert-package")]
        public async Task<IActionResult> InsertPackage([FromBody] PackageRequestDTO request)
        {
            Package package = new Package();
            package = Mapper.Map(request, package);
            package.CreateDate = DateTime.Now;
            package.UpdateDate = DateTime.Now;

            bool result = await _packageQueryService.InsertPackage(package);
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
        [HttpPost("update-package")]
        public async Task<IActionResult> UpdatePackage([FromBody] PackageRequestDTO request)
        {
            Package package = new Package();
            package = Mapper.Map(request, package);
            package.UpdateDate = DateTime.Now;

            bool result = await _packageQueryService.UpdatePackage(package);
            if (result)
            {
                return Ok(new
                {
                    status = "success"
                });
            }

            return BadRequest("Error");
        }

        [HttpGet("get-package-by-id")]
        public async Task<IActionResult> GetById([FromQuery]long id)
        {
            var item = await _packageQueryService.GetPackageById(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        [HttpGet("get-package-list")]
        public async Task<IActionResult> GetCustomerList([FromQuery] CustomerRequestDTO customerRequest)
        {
            var packageList = await _packageQueryService.GetAllPackage();
            return Json(new
            {
                data = packageList,
                itemsCount = packageList.Count
            });
        }
    }
}