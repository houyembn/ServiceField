using ServiceField.Server.Dtos.Articles;
using ServiceField.Server.Models;

namespace ServiceField.Server.Mappers
{
    public static class ArticlesMappers 
    {
        public static ArticlesDto ToArticleDto(this Article articleModel)
        {



            return new ArticlesDto
            {
                Id = articleModel.Id,
                Name = articleModel.Name,
                Description = articleModel.Description,
                SKU = articleModel.SKU,
                CategoryId = articleModel.CategoryId,
                LocationId = articleModel.LocationId,
                Quantity = articleModel.Quantity,
                SupplierId = articleModel.SupplierId,
               
                Condition = articleModel.Condition,
            };


        }
        


        public static Article ToArticleFromCreateDTO(this CreateArticleRequestDto articleDto)
        {
            return new Article
            {

                Name = articleDto.Name,
                Description = articleDto.Description,
                CategoryId = articleDto.CategoryId,
                SKU = articleDto.SKU,
                Quantity=   articleDto.Quantity,
                LocationId= articleDto.LocationId,
                SupplierId = articleDto.SupplierId,
                
                Condition = articleDto.Condition,



            };

        }

    }
}
