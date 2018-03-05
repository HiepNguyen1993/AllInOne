using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Web.Core.AppService.Models
{
    public partial class WebDbContext : DbContext
    {

        public WebDbContext(DbContextOptions<WebDbContext> options)
            : base(options)
        { }
        public DbSet<Account> Account { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<CommonCode> CommonCode { get; set; }
        public DbSet<Package> Package { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<ProductType> ProductType { get; set; }
        public DbSet<Theme> Theme { get; set; }

    }
}
