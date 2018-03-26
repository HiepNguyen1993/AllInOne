using System;

namespace Web.Core.AppService.DTO
{
    public class CustomerRequestDTO
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Fullname { get; set; }
        public bool Gender { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string ImgName { get; set; }
        public string Address { get; set; }
        public string Currency { get; set; }
    }
}
