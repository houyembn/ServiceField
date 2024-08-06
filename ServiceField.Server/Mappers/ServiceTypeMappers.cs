using ServiceField.Server.Dtos.ServiceType;
using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Mappers
{
    public static class ServiceTypeMappers
    {

        public static ServiceTypeDto ToServiceTypeDto(this ServiceType ServiceTypeModel)
        {



            return new ServiceTypeDto
            {
                ServiceTypeId = ServiceTypeModel.ServiceTypeId,
                ServiceTypeName = ServiceTypeModel.ServiceTypeName,
                Description = ServiceTypeModel.Description,
                Category = ServiceTypeModel.Category,
                IsActive = ServiceTypeModel.IsActive,


            };
        }

        public static ServiceType ToServiceTypeFromCreateDTO(this CreateServiceTypeRequestDto ServiceTypeDto)
        {
            return new ServiceType
            {


                ServiceTypeName = ServiceTypeDto.ServiceTypeName,
                Description = ServiceTypeDto.Description,
                Category = ServiceTypeDto.Category,
                IsActive = ServiceTypeDto.IsActive



            };

        }
    }
}
