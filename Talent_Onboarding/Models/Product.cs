using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Talent_Onboarding.Models
{
    public partial class Product
    {
        public Product()
        {
            Sales = new HashSet<Sales>();
        }
        
        public int ProductId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Price { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
    }
}
