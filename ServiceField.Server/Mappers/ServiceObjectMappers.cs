using ServiceField.Server.Dtos.Invoicing;
using ServiceField.Server.Dtos.ServiceObject;
using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Mappers
{
    public static class ServiceObjectMappers
    {
        public static ServiceObjectDto ToServiceObjectDto(this ServiceObject ServiceObjectModel)
        {



            return new ServiceObjectDto
            {
                ServiceObjectId = ServiceObjectModel.ServiceObjectId,
                ServiceObjectName = ServiceObjectModel.ServiceObjectName,
                ServiceObjectDescription = ServiceObjectModel.ServiceObjectDescription


            };
        }

        public static ServiceObject ToServiceObjectFromCreateDTO(this CreateServiceObjectRequestDto ServiceObjectDto)
        {
            return new ServiceObject
            {


                ServiceObjectName = ServiceObjectDto.ServiceObjectName,
                ServiceObjectDescription = ServiceObjectDto.ServiceObjectDescription,



            };

        }

    }
}
