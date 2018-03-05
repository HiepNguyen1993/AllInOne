using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.Core.AppService.Models
{
    [Table("Product")]
    public partial class Product
    {
        [Key]
        [Column(Order = 0)]
        public long Id { get; set; }
        public long Prd_Typ_Id { get; set; }
        public string Name { get; set; }
        public long Price { get; set; }
        public string Unit { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public bool delFlag { get; set; }

    }
}
