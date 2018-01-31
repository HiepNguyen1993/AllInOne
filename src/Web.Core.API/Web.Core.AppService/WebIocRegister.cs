using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Web.Core.AppService.Models;

namespace Web.Core.AppService
{
    public class WebIocRegister
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<WebDbContext, WebDbContext>();
            //services.AddSingleton<IAccountQueryService, AccountQueryService>();
        }
    }
}
