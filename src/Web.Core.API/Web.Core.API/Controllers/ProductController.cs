using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.Core.AppService.DTO;
using Web.Core.AppService.Models;
using Web.Core.AppService.ServiceContracts.Query;

namespace Web.Core.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Product")]
    public class ProductController : Controller
    {
        private readonly IProductQueryService _productQueryService;

        public ProductController(
            IProductQueryService productQueryService)
        {
            _productQueryService = productQueryService;
        }

        [AllowAnonymous]
        [HttpPost("insertProductType")]
        public async Task<IActionResult> RequestToken([FromBody] ProductTypeRequestDTO request)
        {
            ProductType productType = new ProductType();
            productType.CreateDate = DateTime.Now;
            productType.UpdateDate = DateTime.Now;
            productType.Code = request.Code;
            productType.Name = request.Name;
            productType.Description = request.Description;
            productType.delFlag = request.delFlag;

            bool result = await _productQueryService.InsertProductType(productType);
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