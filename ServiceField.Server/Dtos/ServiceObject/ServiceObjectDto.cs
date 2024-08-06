using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Dtos.ServiceObject
{
    public class ServiceObjectDto
    {
        public int ServiceObjectId { get; set; }

        
        public string ServiceObjectName { get; set; }

        
        public string ServiceObjectDescription { get; set; }
    }
}
