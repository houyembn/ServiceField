using ServiceField.Server.Dtos.Installation;
using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Models
{

    public class Installation
    {
        [Key]

        public int InstallationNumber { get; set; }
        public string InstallationName { get; set; } = "";
        public string Description { get; set; } = "";
        public string InstallationType { get; set; } = "";
        public string Owner { get; set; } = "";
        public string InstallationLocation { get; set; } = "";
        public DateTime ManufactureDate { get; set; }

        public string InstallationStatus { get; set; } = "";

        public void UpdateFromDto(UpdateInstallationRequestDto dto)
        {
            InstallationName = dto.InstallationName; 
            Description = dto.Description;
            InstallationType = dto.InstallationType;
            Owner = dto.Owner;
            InstallationLocation = dto.InstallationLocation;
            ManufactureDate = dto.ManufactureDate;
            InstallationStatus = dto.InstallationStatus;
        }


    }
}
