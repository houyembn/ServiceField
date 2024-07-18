﻿using ServiceField.Server.Models;

namespace ServiceField.Server.Dtos.ServiceCase
{
    public class CreateServiceCaseRequestDto
    {
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
    }
}
