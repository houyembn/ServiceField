using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Models
{
    public class MDSkills
    {
        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public virtual IList<ServiceCase> ServiceCases { get; set; }
    }
}
