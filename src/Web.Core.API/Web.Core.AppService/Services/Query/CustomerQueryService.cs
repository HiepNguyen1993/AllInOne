using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Web.Core.AppService.Models;
using Web.Core.AppService.ServiceContracts.Query;

namespace Web.Core.AppService.Services.Query
{
    public class CustomerQueryService: ICustomerQueryService
    {
        private readonly WebDbContext _context;

        public CustomerQueryService(WebDbContext context)
        {
            _context = context;
        }

        public async Task<List<Customer>> GetAllCustomer()
        {
            List<Customer> customerList = _context.Customer.ToList();
            return await Task.FromResult(customerList);
        }

        
    }
}
