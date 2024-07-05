using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.Articles;
using ServiceField.Server.Mappers;

namespace ServiceField.Server.Controllers
{


    [ApiController]
    [Route("ServiceField.Server/Article")]
    public class ArticlesController : ControllerBase
    {

        private readonly ApplicationDBContext _context;
        public ArticlesController(ApplicationDBContext context)
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



    }
}
