using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Web.Core.AppService.Models;
using Web.Core.AppService.ServiceContracts.Query;

namespace Web.Core.AppService.Services.Query
{
    public class AccountQueryService: IAccountQueryService
    {
        private readonly WebDbContext _context;

        public AccountQueryService(WebDbContext context)
        {
            _context = context;
        }

        public async Task<List<Account>> GetAllUser()
        {
            List<Account> allUserList = _context.Account.ToList();
            return await Task.FromResult(allUserList);
        }

        public async Task<Account> GetUserById(long id)
        {
            Account account = _context.Account.FirstOrDefault(t => t.Id == id);
            return await Task.FromResult(account);
        }

        public async Task<Account> ValidateUser(string username, string password)
        {
            var isValidUser =
                _context.Account.FirstOrDefault(item => item.Login == username && item.Password == password);
            ////User validUser = null;
            //if (isValidUser != null)
            //{
            //    validUser = Mapper.Map(isValidUser, validUser);
            //}
            return isValidUser;
        }
    }
}
