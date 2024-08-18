using ServiceField.Server.Models;

namespace ServiceField.Server.Dtos.Articles
{
    public class CreateArticleRequestDto
    {

        public string Name { get; set; }
        public string Description { get; set; }
        public string SKU { get; set; }
        public int CategoryId { get; set; }
        public int Quantity { get; set; }
        public int LocationId { get; set; }
        public string Condition { get; set; }
        public int SupplierId { get; set; }
        public string BarcodeType { get; set; }
        public string Barcode { get; set; }


        public decimal Price { get; set; }


        public decimal PurchasePrice { get; set; }

        public string Currency { get; set; }
        public string QuantityUnit { get; set; }
        public bool HasSerialNo { get; set; }
        public bool IsBatch { get; set; }
        public bool DangerousGoods { get; set; }
        public bool SpareParts { get; set; }
        public bool WarehouseManaged { get; set; }
        public int LeadTime { get; set; }

        public decimal Weight { get; set; }

        public decimal WeightNetto { get; set; }

        public decimal Length { get; set; }


        public decimal Width { get; set; }


        public decimal Height { get; set; }










    }
}
