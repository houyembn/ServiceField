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
                BarcodeType = articleModel.BarcodeType,
                Barcode = articleModel.Barcode,
                Price = articleModel.Price,
                PurchasePrice = articleModel.PurchasePrice,
                Currency = articleModel.Currency,
                QuantityUnit = articleModel.QuantityUnit,
                HasSerialNo = articleModel.HasSerialNo,
                IsBatch = articleModel.IsBatch,
                DangerousGoods = articleModel.DangerousGoods,
                SpareParts = articleModel.SpareParts,
                WarehouseManaged = articleModel.WarehouseManaged,
                LeadTime = articleModel.LeadTime,
                Weight = articleModel.Weight,
                WeightNetto = articleModel.WeightNetto,
                Length = articleModel.Length,
                Width = articleModel.Width,
                Height = articleModel.Height








            };


        }
        


        public static Article ToArticleFromCreateDTO(this CreateArticleRequestDto articleDto)
        {
            return new Article
            {

                Name = articleDto.Name,
                Description = articleDto.Description,
                SKU = articleDto.SKU,
                CategoryId = articleDto.CategoryId,
                Quantity = articleDto.Quantity,
                LocationId = articleDto.LocationId,
                SupplierId = articleDto.SupplierId,
                Condition = articleDto.Condition,
                BarcodeType = articleDto.BarcodeType,
                Barcode = articleDto.Barcode,
                Price = articleDto.Price,
                PurchasePrice = articleDto.PurchasePrice,
                Currency = articleDto.Currency,
                QuantityUnit = articleDto.QuantityUnit,
                HasSerialNo = articleDto.HasSerialNo,
                IsBatch = articleDto.IsBatch,
                DangerousGoods = articleDto.DangerousGoods,
                SpareParts = articleDto.SpareParts,
                WarehouseManaged = articleDto.WarehouseManaged,
                LeadTime = articleDto.LeadTime,
                Weight = articleDto.Weight,
                WeightNetto = articleDto.WeightNetto,
                Length = articleDto.Length,
                Width = articleDto.Width,
                Height = articleDto.Height



            };

        }

    }
}
