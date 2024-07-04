using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;

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


            var articles = _context.Articles.ToList();

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

            return Ok(articles);

        }



    }
}
