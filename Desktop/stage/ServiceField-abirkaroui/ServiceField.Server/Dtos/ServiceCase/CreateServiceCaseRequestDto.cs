using ServiceField.Server.Models;

namespace ServiceField.Server.Dtos.ServiceCase
{
    public class CreateServiceCaseRequestDto
    {
        public string CompanyName { get; set; } = "";
        public int ProductSerialNumber { get; set; } 
        public string ProblemType { get; set; } = "";
        public string Description { get; set; } = "";
        public string Priority { get; set; } = "";
        public string Contract { get; set; } = "";
    }
}
