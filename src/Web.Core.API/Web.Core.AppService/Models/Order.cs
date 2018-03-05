using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.Core.AppService.Models
{
    [Table("Order")]
    public partial class Order
    {
        [Key]
        [Column(Order = 0)]
        public long Id { get; set; }
        public string Code { get; set; }
        public string ShippingTypeId { get; set; }
        public long CustomerId { get; set; }
        public string Surcharge { get; set; }
        public DateTime DeliveryDate { get; set; }
        public DateTime PaymentDate { get; set; }
        public long ShippingFee { get; set; }
        public string Deposit { get; set; }
        public string Note { get; set; }
        public long TotalPrice { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public bool delFlag { get; set; }

    }
}
