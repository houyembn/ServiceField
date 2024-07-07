using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Models
{

    public class ServiceCase
    {
        [Key]
        
        public int Id { get; set; }
        public string CompanyName { get; set; } = "";
        public int ProductSerialNumber { get; set; }
        public string ProblemType { get; set; } = "";
        public string Description { get; set; } = "";
        public string Priority { get; set; } = "";
        public string Contract { get; set; } = "";


    }
}
