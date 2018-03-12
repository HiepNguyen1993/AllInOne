using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Core.AppService.DTO
{
    public class ProductTypeRequestDTO
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool delFlag { get; set; }
    }
}
