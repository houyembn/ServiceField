using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Models
{
    public class MasterDataCompany
    {
        [Key]
        public int Id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string type { get; set; } 
        public string website { get; set; } 
        public string position { get; set; } 
        public string ResponsableUser { get; set; }
        public string description { get; set; }
        public int Phone { get; set; }
        public string sourceType { get; set; }
        public string ParentCopmany { get; set; }
        public string Subsidiary { get; set; }
        public virtual IList<Company> Company { get; set; }
      
    }
}
