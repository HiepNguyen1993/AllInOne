using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Core.AppService.Models;
using Web.Core.AppService.ServiceContracts.Query;

namespace Web.Core.AppService.Services.Query
{
    class PackageQueryService: IPackageQueryService
    {
        private readonly Web.Core.AppService.Models.WebDbContext _context;

        public PackageQueryService(Web.Core.AppService.Models.WebDbContext context)
        {
            _context = context;
        }

        public async Task<List<Package>> GetAllPackage()
        {
            List<Package> packageList = _context.Package.ToList();
            return await Task.FromResult(packageList);
        }

        public async Task<Package> GetPackageById(long id)
        {
            Package package = _context.Package.FirstOrDefault(t => t.Id == id);
            return await Task.FromResult(package);
        }

        public async Task<bool> InsertPackage(Web.Core.AppService.Models.Package package)
        {
            try
            {
                _context.Package.AddRange(package);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> UpdatePackage(Package package)
        {
            try
            {
                _context.Package.AddRange(package);
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
