using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Models.ServiceField
{
    public class ServiceType
    {

        [Key]
        public int ServiceTypeId { get; set; }

        [Required]
        public string ServiceTypeName { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Category { get; set; }

        [Required]
        public bool IsActive { get; set; }
    }
}
