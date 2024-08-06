using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Dtos.Invoicing
{
    public class InvoicingDto
    {

        public int InvoicingId { get; set; }

        public string InvoicingType { get; set; }
      
        public string TermsAndConditions { get; set; }

        public string PaymentMethod { get; set; } 

       
        public string RecurringPeriod { get; set; }
    }
}
