namespace ServiceField.Server.Dtos.Invoicing
{
    public class UpdateInvoicingRequestDto
    {
        public string InvoicingType { get; set; }

        public string TermsAndConditions { get; set; }

        public string PaymentMethod { get; set; }


        public string RecurringPeriod { get; set; }
    }
}
