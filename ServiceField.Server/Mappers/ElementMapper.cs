using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Models;

namespace ServiceField.Server.Mappers
{
    public static class ElementMapper
    {
        public static ElementDto ToElementDto(this MDElement mDElement)
        {
            return new ElementDto
            {
                Id = mDElement.Id,
                Type = mDElement.Type,
            };
        }
        public static MDElement ToElementCreateDTO(this CreateElementRequestDto elementDto)
        {
            return new MDElement
            {
                Id = elementDto.Id,
                Type = elementDto.Type,


            };

        }
    }
}
