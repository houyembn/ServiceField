using System.ComponentModel.DataAnnotations.Schema;

namespace ServiceField.Server.Dtos.Company
{
    public class CreateCompanyRequestDto
    {
        public string name { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public string type { get; set; } = string.Empty;
        public string website { get; set; } = string.Empty;
        public string position { get; set; } = string.Empty;
        public string ResponsableUser { get; set; } = string.Empty;
        public string description { get; set; } = string.Empty;
        public int phone { get; set; }
        public string sourceType { get; set; } = string.Empty;
        public string ParentCopmany { get; set; } = string.Empty;
        public string Subsidiary { get; set; } = string.Empty;
       
    }

    
}
