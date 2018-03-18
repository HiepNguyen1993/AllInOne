using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Web.Core.AppService.Models;

namespace Web.Core.AppService.ServiceContracts.Query
{
    public interface IAccountQueryService
    {
        Task<Account> ValidateUser(string username, string password);
        Task<List<Account>> GetAllUser();
        Task<Account> GetUserById(long id);
        Task<bool> InsertAccount(Account account);
        Task<bool> UpdateAccount(Account account);
    }
}
