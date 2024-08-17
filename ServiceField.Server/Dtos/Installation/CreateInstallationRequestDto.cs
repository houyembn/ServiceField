using ServiceField.Server.Models;

namespace ServiceField.Server.Dtos.Installation
{
    public class CreateInstallationRequestDto
    {
        public string InstallationName { get; set; } = "";
        public string Description { get; set; } = "";
        public string InstallationType { get; set; } = "";
        public string Owner { get; set; } = "";
        public string InstallationLocation { get; set; } = "";
        public DateTime ManufactureDate { get; set; } 

        public string InstallationStatus { get; set; } = "";
    }
}
