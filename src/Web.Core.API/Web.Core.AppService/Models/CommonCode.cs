using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.Core.AppService.Models
{
    [Table("CommonCode")]
    public partial class CommonCode
    {
        [Key]
        [Column(Order = 0)]
        public long Id { get; set; }

        public string ComGroupCode { get; set; }
        public string ComCode { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public bool delFlag { get; set; }

    }
}
