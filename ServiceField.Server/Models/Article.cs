using System.ComponentModel.DataAnnotations.Schema;

namespace ServiceField.Server.Models
{
    public class Article
    {
        public int Id { get; set; }
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

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal PurchasePrice { get; set; }

        public string Currency { get; set; }
        public string QuantityUnit { get; set; }
        public bool HasSerialNo { get; set; }
        public bool IsBatch { get; set; }
        public bool DangerousGoods { get; set; }
        public bool SpareParts { get; set; }
        public bool WarehouseManaged { get; set; }
        public int LeadTime { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Weight { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal WeightNetto { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Length { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Width { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Height { get; set; }



    }
}
