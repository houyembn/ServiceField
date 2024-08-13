namespace ServiceField.Server.Dtos.Orders
{
    public class UpdateOrderRequestDto
    {
        public int OrderNumber { get; set; }

        public string ServiceObject { get; set; }

        public int IdCompany { get; set; }

        public string CompanyName { get; set; }

        public int IdInstallation { get; set; }

        public string InstallationName { get; set; }

    
        public string InitiatorName { get; set; }

        public string InitiatorContact { get; set; }

        public string ServiceType { get; set; }

        public string Invoicing { get; set; }

        public string Message { get; set; }

        public string Address { get; set; }

        public string ContactPerson { get; set; }

        public string Location { get; set; }
    }
}
