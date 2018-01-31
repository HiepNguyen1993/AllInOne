using System;
using System.Collections.Generic;

namespace Web.Core.AppService.Models
{
    public partial class Account
    {
        public long Id { get; set; }
        public string CompanyId { get; set; }
        public string Login { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public bool? IsActive { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
