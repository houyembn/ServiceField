using ServiceField.Server.Models;

namespace ServiceField.Server.Dtos.Installation
{
    public class InstallationDto
    {

        public int InstallationNumber { get; set; }
        public string Description { get; set; } = string.Empty;
        public string InstallationType { get; set; } = string.Empty;
        public string Owner { get; set; } = string.Empty;
        public string InstallationLocation { get; set; } = string.Empty;
        public DateTime ManufactureDate { get; set; }

        public string InstallationStatus { get; set; } = string.Empty;






    }
}