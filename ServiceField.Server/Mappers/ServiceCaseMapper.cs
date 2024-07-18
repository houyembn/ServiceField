using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Models;

namespace ServiceField.Server.Mappers
{
    public static class ServiceCaseMapper
    {
        public static ServiceCaseDto ToServiceCaseDto(this ServiceCase serviceCase)
        {
            return new ServiceCaseDto
            {
                Id = serviceCase.Id,
                ProductSerialNumber = serviceCase.ProductSerialNumber,
                ServiceObject = serviceCase.ServiceObject,
                AffectedCompany = serviceCase.AffectedCompany,
                ContactPerson = serviceCase.ContactPerson,
                AffectedInstallation = serviceCase.AffectedInstallation,
                Skills = serviceCase.Skills,
                OriginatingSOrder = serviceCase.OriginatingSOrder,
                
                CheckList = serviceCase.CheckList,
                Element = serviceCase.Element,
                ServiceCaseStatus = serviceCase.ServiceCaseStatus,
                ServiceCaseCategory = serviceCase.ServiceCaseCategory,
                ResponsableUser = serviceCase.ResponsableUser,
                Priority = serviceCase.Priority,
                Message = serviceCase.Message,
                Creator = serviceCase.Creator,
                CreationDate = serviceCase.CreationDate
            };
        }
        public static ServiceCase ToServiceCaseCreateDTO(this CreateServiceCaseRequestDto serviceCaseDto )
        {
            return new ServiceCase
            {
                Id = serviceCaseDto.Id,
                ProductSerialNumber = serviceCaseDto.ProductSerialNumber,
                ServiceObject = serviceCaseDto.ServiceObject,
                AffectedCompany = serviceCaseDto.AffectedCompany,
                ContactPerson = serviceCaseDto.ContactPerson,
                AffectedInstallation = serviceCaseDto.AffectedInstallation,
                Skills = serviceCaseDto.Skills,
                OriginatingSOrder = serviceCaseDto.OriginatingSOrder,
                
                CheckList = serviceCaseDto.CheckList,
                Element = serviceCaseDto.Element,
                ServiceCaseStatus = serviceCaseDto.ServiceCaseStatus,
                ServiceCaseCategory = serviceCaseDto.ServiceCaseCategory,
                ResponsableUser = serviceCaseDto.ResponsableUser,
                Priority = serviceCaseDto.Priority,
                Message = serviceCaseDto.Message,
                Creator = serviceCaseDto.Creator,
                CreationDate = serviceCaseDto.CreationDate

            };

        }
    }
}
