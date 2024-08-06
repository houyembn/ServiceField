using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Dtos.ServiceType
{
    public class ServiceTypeDto
    {
        public int ServiceTypeId { get; set; }

        public string ServiceTypeName { get; set; }

        public string Description { get; set; }

        public string Category { get; set; }

        public bool IsActive { get; set; }
    }
}
