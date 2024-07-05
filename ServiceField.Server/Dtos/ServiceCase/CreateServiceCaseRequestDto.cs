using ServiceField.Server.Models;

namespace ServiceField.Server.Dtos.ServiceCase
{
    public class CreateServiceCaseRequestDto
    {
        public CompanyName CompanyName { get; set; }
        public int ProductSerialNumber { get; set; }
        public ProblemType ProblemType { get; set; }
        public string Description { get; set; } = "";
        public PriorityType Priority { get; set; }
        public ContractType Contract { get; set; }
    }
}
