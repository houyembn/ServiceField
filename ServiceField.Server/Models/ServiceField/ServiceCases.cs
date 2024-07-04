using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServiceField.Server.Models.ServiceField
{
    public class ServiceCases
    {
        [Key]
        public int IdCase { get; set; }

        [Required]
        public DateTime DateTimeOfCase { get; set; }

        [Required]
        public string DescriptionOfCase { get; set; }

        [Required]
        public string HowItIsSolved { get; set; }

        [Required]
        public int IdClient { get; set; }

        [Required]
        public string ClientName { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string PhoneNumber { get; set; }
    }
}


