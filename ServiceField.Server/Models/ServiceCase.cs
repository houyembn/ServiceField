using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Numerics;
using Microsoft.EntityFrameworkCore;

namespace ServiceField.Server.Models
{

    public class ServiceCase
    {
        [Key]
        public int Id { get; set; }
    
      
       
        public int ProductSerialNumber { get; set; }
        public LuServiceObject ServiceObject { get; set; } 
        public string AffectedCompany { get; set; } = "";
        public string ContactPerson { get; set; } = "";
        public string AffectedInstallation { get; set; } = "";
        public MDSkills Skills { get; set; } 
        public string OriginatingSOrder { get; set; } = "";
       
        public MDCheckList CheckList { get; set; } 
        public MDElement Element { get; set; } 
        public string ServiceCaseStatus { get; set; } = "";
        public LuServiceCaseCategory ServiceCaseCategory { get; set; } 
        public string ResponsableUser { get; set; } = "";

        public string Priority { get; set; } = "";

        public string Message { get; set; } = "";
        public string Creator { get; set; } = "";
        public DateTime CreationDate { get; set; } = DateTime.UtcNow;

        //public int ObjectFK { get; set; }
        //public int SkillsFK { get; set; }
        //public int CkeckListFK { get; set; }
        //public int ElementFK { get; set; }
        //public int CategoryFK { get; set; }
        //[ForeignKey("ObjectFK")]
        //public virtual LuServiceObject LuServiceObject { get; set; }
        //[ForeignKey("SkillsFK")]
        //public virtual MDSkills MDSkills { get; set; }
        //[ForeignKey("ElementFK")]
        //public virtual MDElement MDElement { get; set; }
        //[ForeignKey("CkeckListFK")]
        //public virtual MDCheckList MDCheckList { get; set; }

        //[ForeignKey("CategoryFK")]
        //public virtual LuServiceCaseCategory LuServiceCaseCategory { get; set; }












        //[Key]

        //public int Id { get; set; }
        //public string CompanyName { get; set; } = "";
        //public int ProductSerialNumber { get; set; }
        //public string ProblemType { get; set; } = "";
        //public string Description { get; set; } = "";
        //public string Priority { get; set; } = "";
        //public string Contract { get; set; } = "";




    }
}
