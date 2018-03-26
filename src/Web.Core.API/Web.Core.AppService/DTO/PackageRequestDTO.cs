using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Core.AppService.DTO
{
    public class PackageRequestDTO
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long Price { get; set; }
        public long ThemeId { get; set; }
        public string Description { get; set; }
        public bool delFlag { get; set; }
    }
}
