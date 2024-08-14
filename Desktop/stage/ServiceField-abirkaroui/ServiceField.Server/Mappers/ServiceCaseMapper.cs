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
                CompanyName = serviceCase.CompanyName,
                ProductSerialNumber = serviceCase.ProductSerialNumber,
                ProblemType = serviceCase.ProblemType,
                Description = serviceCase.Description,
                Priority = serviceCase.Priority,
                Contract = serviceCase.Contract,
            };
        }
        public static ServiceCase ToServiceCaseCreateDTO(this CreateServiceCaseRequestDto serviceCaseDto )
        {
            return new ServiceCase
            {
                CompanyName = serviceCaseDto.CompanyName,
                ProductSerialNumber = serviceCaseDto.ProductSerialNumber,
                ProblemType = serviceCaseDto.ProblemType,
                Description = serviceCaseDto.Description,

                Priority = serviceCaseDto.Priority,
                Contract = serviceCaseDto.Contract,

            };

        }
    }
}
