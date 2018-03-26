using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Web.Core.AppService.Models;

namespace Web.Core.AppService.ServiceContracts.Query
{
    public interface IPackageQueryService
    {
        Task<bool> InsertPackage(Package package);
        Task<bool> UpdatePackage(Package package);
        Task<List<Package>> GetAllPackage();
        Task<Package> GetPackageById(long id);
    }
}
