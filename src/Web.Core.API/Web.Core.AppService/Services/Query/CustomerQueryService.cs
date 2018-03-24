using System;
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

        public async Task<Customer> GetUserById(long id)
        {
            Customer customer = _context.Customer.FirstOrDefault(t => t.Id == id);
            return await Task.FromResult(customer);
        }
        public async Task<bool> InsertCustomer(Customer customer)
        {
            try
            {
                _context.Customer.AddRange(customer);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> UpdateCustomer(Customer customer)
        {
            try
            {
                _context.Customer.AddRange(customer);
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
