using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Models.ServiceField
{
    public class Invoicing
    {
        [Key]
        public int InvoicingId { get; set; }

        [Required]
        public string InvoicingType { get; set; }

        [Required]
        public string TermsAndConditions { get; set; }

        [Required]
        public string PaymentMethod { get; set; } // "Credit Card", "Bank Transfer"

        [Required]
        public string RecurringPeriod { get; set; }

    }
}
