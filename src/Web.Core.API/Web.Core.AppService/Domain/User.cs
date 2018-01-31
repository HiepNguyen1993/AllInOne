using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Core.AppService.Domain
{
    public class User
    {
        public long Id { get; set; }
        public string CompanyId { get; set; }
        public string Name { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public DateTime BirthDate { get; set; }
        public string Address { get; set; }
        public bool IsActive { get; set; }
        public int UserRole { get; set; }
        public int UserType { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

    }
}
