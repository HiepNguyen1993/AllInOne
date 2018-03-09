using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.Core.AppService.DTO;
using Web.Core.AppService.ServiceContracts.Query;
using Web.Core.AppService.Models;
using Microsoft.Extensions.Configuration;

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
        [HttpPost("insertPackage")]
        public async Task<IActionResult> RequestToken([FromBody] PackageRequestDTO request)
        {
            Package package = new Package();
            package.CreateDate = DateTime.Now;
            package.UpdateDate = DateTime.Now;
            package.Name = request.Name;
            package.Price = request.Price;
            package.ThemeId = request.ThemeId;
            package.Description = request.Description;
            package.delFlag = false;

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
    }
}