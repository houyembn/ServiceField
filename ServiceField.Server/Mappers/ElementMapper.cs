using ServiceField.Server.Models.ServiceField;
using ServiceField.Server.Dtos.ServiceCase;

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
