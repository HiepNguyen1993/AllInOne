using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Web.Core.AppService.Models;

namespace Web.Core.AppService.ServiceContracts.Query
{
    public interface IProductQueryService
    {
        Task<bool> InsertProductType(ProductType productType);
    }
}
