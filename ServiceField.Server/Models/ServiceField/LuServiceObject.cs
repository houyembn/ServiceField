using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Models.ServiceField
{
    public class LuServiceObject
    {

        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public virtual IList<ServiceCase> ServiceCase { get; set; }

    }
}
