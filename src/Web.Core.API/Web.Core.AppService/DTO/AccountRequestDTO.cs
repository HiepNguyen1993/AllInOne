using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Core.AppService.DTO
{
    public class AccountRequestDTO
    {
        public long Id { get; set; }
        public string Login { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public bool IsActive { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Avatar { get; set; }
        public bool Gender { get; set; }
        public string Currency { get; set; }
    }
}
