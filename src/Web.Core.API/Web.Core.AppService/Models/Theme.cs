using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.Core.AppService.Models
{
    [Table("Theme")]
    public partial class Theme
    {
        [Key]
        [Column(Order = 0)]
        public long Id { get; set; }

        public long TypeId { get; set; }
        public long StyleId { get; set; }
        public string ImgName { get; set; }
        public string Name { get; set; }
        public long OrderNo { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public bool delFlag { get; set; }

    }
}
