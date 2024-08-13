using ServiceField.Server.Models.ServiceField.Server.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServiceField.Server.Models.ServiceField
{
    public class ServiceOrder
    {
        [Key]
        public int IdOrder { get; set; }

        [Required]
        public int OrderNumber { get; set; }

        //[Required]
        //public string ServiceObject { get; set; }

        [Required]
        public int ServiceObjectId { get; set; } // Foreign Key

        [ForeignKey(nameof(ServiceObjectId))]
        public ServiceObject? ServiceObject { get; set; } // Navigation Property


        [Required]
        public int IdCompany { get; set; }

        [Required]
        public string CompanyName { get; set; }


        [Required]
        public int IdInstallation { get; set; }

        [Required]
        public string InstallationName { get; set; }


        [Required]
        public int IdInitiator { get; set; } // Foreign Key

        [ForeignKey(nameof(IdInitiator))]
        public Users? Initiator { get; set; }

        [Required]
        public string InitiatorName { get; set; }

        [Required]
        public string InitiatorContact { get; set; }


        //[Required]
        //public string ServiceType { get; set; }

        [Required]
        public int ServiceTypeId { get; set; } // Foreign Key

        [ForeignKey(nameof(ServiceTypeId))]
        public ServiceType? ServiceType { get; set; } // Navigation Property


        [Required]
        public int InvoicingId { get; set; } // Foreign Key

        [ForeignKey(nameof(InvoicingId))]
        public Invoicing? Invoicing { get; set; } // Navigation Property


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
