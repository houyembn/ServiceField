using ServiceField.Server.Dtos.Installation;
using ServiceField.Server.Models;

namespace ServiceField.Server.Mappers
{
    public static class InstallationMapper
    {
        public static InstallationDto ToInstallationDto(this Installation installation)
        {
            return new InstallationDto
            {
                InstallationNumber = installation.InstallationNumber,
                InstallationName=installation.InstallationName,
                Description = installation.Description,
                InstallationType = installation.InstallationType,
                Owner = installation.Owner,
                InstallationLocation = installation.InstallationLocation,
                ManufactureDate = installation.ManufactureDate,
                InstallationStatus = installation.InstallationStatus,



            };
        }
        public static Installation ToInstallationCreateDTO(this CreateInstallationRequestDto installationDto)
        {
            return new Installation
            {
                InstallationName = installationDto.InstallationName,
                Description = installationDto.Description,
                InstallationType = installationDto.InstallationType,
                Owner = installationDto.Owner,
                InstallationLocation = installationDto.InstallationLocation,
                ManufactureDate = installationDto.ManufactureDate,
                InstallationStatus = installationDto.InstallationStatus,


            };

        }
    }
}
