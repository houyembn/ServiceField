using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.Articles;
using ServiceField.Server.Mappers;

namespace ServiceField.Server.Controllers
{


    [ApiController]
    [Route("ServiceField.Server/Article")]
    public class ArticlesController : ControllerBase
    {

        private readonly ApplicationDbContext _context;
        public ArticlesController(ApplicationDbContext context)
        {
            _context=context;
        }


        [HttpGet]
        public IActionResult GetAll()
        {


            var articles = _context.Articles.ToList()
                .Select(s => s.ToArticleDto());

            return Ok(articles);
        }


        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {

            var articles = _context.Articles.Find(id);


            if(articles == null)
            {
                return NotFound();

            }

            return Ok(articles.ToArticleDto());

        }



        [HttpPost]
        public IActionResult Create([FromBody] CreateArticleRequestDto articlelDto)
        {


            var articleModel= articlelDto.ToArticleFromCreateDTO();

            _context.Articles.Add(articleModel);
            _context.SaveChanges();


            return CreatedAtAction(nameof(GetById), new { id = articleModel.Id }, articleModel.ToArticleDto());


        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateArticleRequestDto updateDto)
        {
            var articleModel = await _context.Articles.FirstOrDefaultAsync(s => s.Id == id);

            if (articleModel == null)
            {
                return NotFound();
            }

            // Update the article properties with the values from the DTO
            articleModel.Name = updateDto.Name;
            articleModel.Description = updateDto.Description;
            articleModel.SKU = updateDto.SKU;
            articleModel.CategoryId = updateDto.CategoryId;
            articleModel.Quantity = updateDto.Quantity;
            articleModel.LocationId = updateDto.LocationId;
            articleModel.Condition = updateDto.Condition;
            articleModel.SupplierId = updateDto.SupplierId;
            articleModel.BarcodeType = updateDto.BarcodeType;
            articleModel.Barcode = updateDto.Barcode;
            articleModel.Price = updateDto.Price;
            articleModel.PurchasePrice = updateDto.PurchasePrice;
            articleModel.Currency = updateDto.Currency;
            articleModel.QuantityUnit = updateDto.QuantityUnit;
            articleModel.HasSerialNo = updateDto.HasSerialNo;
            articleModel.IsBatch = updateDto.IsBatch;
            articleModel.DangerousGoods = updateDto.DangerousGoods;
            articleModel.SpareParts = updateDto.SpareParts;
            articleModel.WarehouseManaged = updateDto.WarehouseManaged;
            articleModel.LeadTime = updateDto.LeadTime;
            articleModel.Weight = updateDto.Weight;
            articleModel.WeightNetto = updateDto.WeightNetto;
            articleModel.Length = updateDto.Length;
            articleModel.Width = updateDto.Width;
            articleModel.Height = updateDto.Height;

            // Save the changes to the database
            await _context.SaveChangesAsync();

            return Ok(articleModel.ToArticleDto());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var article = await _context.Articles.FindAsync(id);

            if (article == null)
            {
                return NotFound();
            }

            _context.Articles.Remove(article);
            await _context.SaveChangesAsync();

            return NoContent();
        }



    }
}
