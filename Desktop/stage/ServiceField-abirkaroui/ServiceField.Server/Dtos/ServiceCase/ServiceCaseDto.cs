using ServiceField.Server.Models;

namespace ServiceField.Server.Dtos.ServiceCase
{
    public class ServiceCaseDto
    {


        public int Id { get; set; }
        public string CompanyName { get; set; } = string.Empty;
        public int ProductSerialNumber { get; set; }
        public string ProblemType { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Priority { get; set; } = string.Empty;
        public string Contract { get; set; } = string.Empty;
    }
}
