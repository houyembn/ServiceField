namespace ServiceField.Server.Dtos.ServiceCase
{
    public class UpdateServiceCaseRequestDto
    {
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
