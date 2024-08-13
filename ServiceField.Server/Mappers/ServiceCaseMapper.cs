using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Mappers
{
    public static class ServiceCaseMapper
    {
        public static ServiceCaseDto ToServiceCaseDto(this Models.ServiceField.ServiceCase   serviceCase)
        {
            return new ServiceCaseDto
            {
                //Id = serviceCase.Id,
                //ProductSerialNumber = serviceCase.ProductSerialNumber,
                //ServiceObject = serviceCase.ServiceObject,
                //AffectedCompany = serviceCase.AffectedCompany,
                //ContactPerson = serviceCase.ContactPerson,
                //AffectedInstallation = serviceCase.AffectedInstallation,
                //Skills = serviceCase.Skills,
                //OriginatingSOrder = serviceCase.OriginatingSOrder,

                //CheckList = serviceCase.CheckList,
                //Element = serviceCase.Element,
                //ServiceCaseStatus = serviceCase.ServiceCaseStatus,
                //ServiceCaseCategory = serviceCase.ServiceCaseCategory,
                //ResponsableUser = serviceCase.ResponsableUser,
                //Priority = serviceCase.Priority,
                //Message = serviceCase.Message,
                //Creator = serviceCase.Creator,
                //CreationDate = serviceCase.CreationDate
                Id = serviceCase.Id,
                ProductSerialNumber = serviceCase.ProductSerialNumber,
                AffectedCompany = serviceCase.AffectedCompany,
                ContactPerson = serviceCase.ContactPerson,
                AffectedInstallation = serviceCase.AffectedInstallation,
                OriginatingSOrder = serviceCase.OriginatingSOrder,
                ServiceCaseStatus = serviceCase.ServiceCaseStatus,
                ResponsableUser = serviceCase.ResponsableUser,
                Priority = serviceCase.Priority,
                Message = serviceCase.Message,
                Creator = serviceCase.Creator,
                CreationDate = serviceCase.CreationDate,

                ObjectFK = serviceCase.ObjectFK,
                SkillsFK = serviceCase.SkillsFK,
                CheckListFK = serviceCase.CheckListFK,
                ElementFK = serviceCase.ElementFK,
                CategoryFK = serviceCase.CategoryFK
            };
        }
        public static Models.ServiceField.ServiceCase ToServiceCaseCreateDTO(this CreateServiceCaseRequestDto serviceCaseDto)
        {
            return new Models.ServiceField.ServiceCase
            {
                //Id = serviceCaseDto.Id,
                //ProductSerialNumber = serviceCaseDto.ProductSerialNumber,
                //ServiceObject = serviceCaseDto.ServiceObject,
                //AffectedCompany = serviceCaseDto.AffectedCompany,
                //ContactPerson = serviceCaseDto.ContactPerson,
                //AffectedInstallation = serviceCaseDto.AffectedInstallation,
                //Skills = serviceCaseDto.Skills,
                //OriginatingSOrder = serviceCaseDto.OriginatingSOrder,

                //CheckList = serviceCaseDto.CheckList,
                //Element = serviceCaseDto.Element,
                //ServiceCaseStatus = serviceCaseDto.ServiceCaseStatus,
                //ServiceCaseCategory = serviceCaseDto.ServiceCaseCategory,
                //ResponsableUser = serviceCaseDto.ResponsableUser,
                //Priority = serviceCaseDto.Priority,
                //Message = serviceCaseDto.Message,
                //Creator = serviceCaseDto.Creator,
                //CreationDate = serviceCaseDto.CreationDate
                Id = serviceCaseDto.Id,
                ProductSerialNumber = serviceCaseDto.ProductSerialNumber,
                AffectedCompany = serviceCaseDto.AffectedCompany,
                ContactPerson = serviceCaseDto.ContactPerson,
                AffectedInstallation = serviceCaseDto.AffectedInstallation,
                OriginatingSOrder = serviceCaseDto.OriginatingSOrder,
                ServiceCaseStatus = serviceCaseDto.ServiceCaseStatus,
                ResponsableUser = serviceCaseDto.ResponsableUser,
                Priority = serviceCaseDto.Priority,
                Message = serviceCaseDto.Message,
                Creator = serviceCaseDto.Creator,
                CreationDate = serviceCaseDto.CreationDate,

                ObjectFK = serviceCaseDto.ObjectFK,
                SkillsFK = serviceCaseDto.SkillsFK,
                CheckListFK = serviceCaseDto.CheckListFK,
                ElementFK = serviceCaseDto.ElementFK,
                CategoryFK = serviceCaseDto.CategoryFK

            };

        }
    }
}
