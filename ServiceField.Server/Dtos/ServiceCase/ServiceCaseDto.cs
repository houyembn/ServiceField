using ServiceField.Server.Models;

namespace ServiceField.Server.Dtos.ServiceCase
{
    public class ServiceCaseDto
    {
        //public int Id { get; set; }
        //public int ProductSerialNumber { get; set; } 
        //public LuServiceObject ServiceObject { get; set; }
        //public string AffectedCompany { get; set; } = string.Empty;
        //public string ContactPerson { get; set; } = string.Empty;
        //public string AffectedInstallation { get; set; } = string.Empty;
        //public MDSkills Skills { get; set; }
        //public string OriginatingSOrder { get; set; } = string.Empty;

        //public MDCheckList CheckList { get; set; }
        //public MDElement Element { get; set; }
        //public string ServiceCaseStatus { get; set; } = string.Empty;
        //public LuServiceCaseCategory ServiceCaseCategory { get; set; }
        //public string ResponsableUser { get; set; } = string.Empty;
        //public string Priority { get; set; } = string.Empty;
        //public string Message { get; set; } = string.Empty;
        //public string Creator { get; set; } = string.Empty;
        //public DateTime CreationDate { get; set; }
        public int Id { get; set; }
        public int ProductSerialNumber { get; set; }
        public string AffectedCompany { get; set; } = "";
        public string ContactPerson { get; set; } = "";
        public string AffectedInstallation { get; set; } = "";
        public string OriginatingSOrder { get; set; } = "";
        public string ServiceCaseStatus { get; set; } = "";
        public string ResponsableUser { get; set; } = "";
        public string Priority { get; set; } = "";
        public string Message { get; set; } = "";
        public string Creator { get; set; } = "";
        public DateTime CreationDate { get; set; } = DateTime.UtcNow;
        public int ObjectFK { get; set; }
        public int SkillsFK { get; set; }
        public int CheckListFK { get; set; }
        public int ElementFK { get; set; }
        public int CategoryFK { get; set; }
    }

     
}
