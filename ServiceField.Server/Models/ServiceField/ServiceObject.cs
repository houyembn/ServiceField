using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Models.ServiceField
{
    public class ServiceObject
    {
        [Key]
        public int ServiceObjectId { get; set; }

        [Required]
        public string ServiceObjectName { get; set; }

        [Required]
        public string ServiceObjectDescription { get; set; }


    }
}
