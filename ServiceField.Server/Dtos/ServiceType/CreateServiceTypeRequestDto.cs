namespace ServiceField.Server.Dtos.ServiceType
{
    public class CreateServiceTypeRequestDto
    {

        public string ServiceTypeName { get; set; }

        public string Description { get; set; }

        public string Category { get; set; }

        public bool IsActive { get; set; }
    }
}
