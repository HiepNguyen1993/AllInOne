using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Web.Core.AppService.Domain;

namespace Web.Core.AppService.ServiceContracts.Query
{
    public interface IAccountQueryService
    {
        Task<User> ValidateUser(string username, string password);
    }
}
