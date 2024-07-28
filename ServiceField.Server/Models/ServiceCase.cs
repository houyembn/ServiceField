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

    [ForeignKey("ObjectFK")]
    public virtual LuServiceObject LuServiceObject { get; set; }
    [ForeignKey("SkillsFK")]
    public virtual MDSkills MDSkills { get; set; }
    [ForeignKey("ElementFK")]
    public virtual MDElement MDElement { get; set; }
    [ForeignKey("CheckListFK")]
    public virtual MDCheckList MDCheckList { get; set; }
    [ForeignKey("CategoryFK")]
    public virtual LuServiceCaseCategory LuServiceCaseCategory { get; set; }
}
}
