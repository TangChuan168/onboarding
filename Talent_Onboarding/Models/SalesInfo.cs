using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Talent_Onboarding.Models
{
    public class SalesInfo
    {   
        [Required]
        public string Customer { get; set; }
        [Required]
        public string Product { get; set; }
        [Required]
        public string Store { get; set; }
        public DateTime? DateSold { get; set; }
        [Required]
        public int SalesId { get; set; }
        [Required]
        public int CustomerId { get; set; }
        [Required]
        public int ProductId { get; set; }
        [Required]
        public int StoreId { get; set; }
    }
}
