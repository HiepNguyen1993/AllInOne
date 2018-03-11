using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
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
    }
}
