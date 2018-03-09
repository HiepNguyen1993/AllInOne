using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Core.AppService.Domain
{
    public class Package
    {
        public long Id { get; set; }
        public long ThemeId { get; set; }
        public string ImgName { get; set; }
        public string Name { get; set; }
        public long Price { get; set; }
        public string Description { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public bool delFlag { get; set; }
    }
}
