using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Models;

namespace ServiceField.Server.Mappers
{
    public static class CategoryMapper
    {
        public static CategoryDto ToCategoryDto(this LuServiceCaseCategory luServiceCaseCategory)
        {
            return new CategoryDto
            {
                Id = luServiceCaseCategory.Id,
                Type = luServiceCaseCategory.Type,
            };
        }
        public static LuServiceCaseCategory ToCategoryCreateDTO(this CreateCategoryRequestDto categoryDto)
        {
            return new LuServiceCaseCategory
            {
                Id = categoryDto.Id,
                Type = categoryDto.Type,


            };

        }
    }
  


}
