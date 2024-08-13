using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Mappers
{
    public static class ObjectMapper
    {
        public static ObjectDto ToObjectDto(this LuServiceObject luServiceObject)
        {
            return new ObjectDto
            {
                Id = luServiceObject.Id,
                Type = luServiceObject.Type,
            };
        }
        public static LuServiceObject ToObjectCreateDTO(this CreateObjectRequestDto objectDto)
        {
            return new LuServiceObject
            {
                Id = objectDto.Id,
                Type = objectDto.Type,


            };

        }
    }
}
