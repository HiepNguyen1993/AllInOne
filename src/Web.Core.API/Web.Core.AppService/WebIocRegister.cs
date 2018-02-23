using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Web.Core.AppService.Models;
using Web.Core.AppService.ServiceContracts.Query;
using Web.Core.AppService.Services.Query;

namespace Web.Core.AppService
{
    public class WebIocRegister
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<WebDbContext, WebDbContext>();
            services.AddSingleton<IAccountQueryService, AccountQueryService>();
        }
    }
}
