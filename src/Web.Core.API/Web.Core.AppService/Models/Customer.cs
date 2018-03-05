using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.Core.AppService.Models
{
    [Table("Customer")]
    public partial class Customer
    {
        [Key]
        [Column(Order = 0)]
        public long Id { get; set; }
        public string Fullname { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public bool? Address { get; set; }
        public string Avatar { get; set; }
        public bool Gender { get; set; }
        public string Currency { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public bool delFlag { get; set; }

    }
}
