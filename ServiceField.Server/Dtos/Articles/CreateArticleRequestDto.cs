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

     











    }
}
