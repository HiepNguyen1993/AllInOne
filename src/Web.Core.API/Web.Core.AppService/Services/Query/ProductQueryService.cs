using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Web.Core.AppService.Models;
using Web.Core.AppService.ServiceContracts.Query;

namespace Web.Core.AppService.Services.Query
{
    class ProductQueryService : IProductQueryService
    {
        private readonly WebDbContext _context;

        public ProductQueryService(WebDbContext context)
        {
            _context = context;
        }

        public async Task<bool> InsertProductType(ProductType productType)
        {
            try
            {
                _context.ProductType.AddRange(productType);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
