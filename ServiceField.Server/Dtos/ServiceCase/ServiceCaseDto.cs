using ServiceField.Server.Models;

namespace ServiceField.Server.Dtos.ServiceCase
{
    public class ServiceCaseDto
    {
        public int Id { get; set; }
        public CompanyName CompanyName { get; set; }
        public int ProductSerialNumber { get; set; }
        public ProblemType ProblemType { get; set; }
        public string Description { get; set; } = string.Empty;
        public PriorityType Priority { get; set; }
        public ContractType Contract { get; set; }
    }
}
