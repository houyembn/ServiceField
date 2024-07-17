using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Models.ServiceField
{
    public class ServiceOrder
    {
        [Key]
        public int IdOrder { get; set; }

        [Required]
        public int OrderNumber { get; set; }

        [Required]
        public string ServiceObject { get; set; }

        [Required]
        public int IdCompany { get; set; }

        [Required]
        public string CompanyName { get; set; }


        [Required]
        public int IdInstallation { get; set; }

        [Required]
        public string InstallationName { get; set; }


        [Required]
        public int IdInitiator { get; set; }

        [Required]
        public string InitiatorName { get; set; }

        [Required]
        public string InitiatorContact { get; set; }


        [Required]
        public string ServiceType { get; set; }


        [Required]
        public string Invoicing { get; set; }


        [Required]
        public string Message { get; set; }


        [Required]
        public string Address { get; set; }

        [Required]
        public string ContactPerson { get; set; }

        [Required]
        public string Location { get; set; }
    }
}
