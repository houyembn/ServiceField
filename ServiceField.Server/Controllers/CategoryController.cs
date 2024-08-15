using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Mappers;

namespace ServiceField.Server.Controllers
{
    [ApiController]
    [Route("ServiceField/Category")]
    public class CategoryController : ControllerBase
    {
        
            private readonly ApplicationDBContext _context;
            public CategoryController(ApplicationDBContext context)
            {
                _context = context;
            }
            [HttpGet]
            public IActionResult GetAll()
            {


                var serviceCases = _context.LuServiceCaseCategories.ToList()
                    .Select(s => s.ToCategoryDto());

                return Ok(serviceCases);
            }


            [HttpGet("{id}")]
            public IActionResult GetById([FromRoute] int id)
            {

                var serviceCases = _context.LuServiceCaseCategories.Find(id);


                if (serviceCases == null)
                {
                    return NotFound();

                }

                return Ok(serviceCases.ToCategoryDto());

            }
        [HttpPost]
        public IActionResult Create([FromBody] CreateCategoryRequestDto CategoryDto)
        {

            var serviceCaseModel = CategoryDto.ToCategoryCreateDTO();

            _context.LuServiceCaseCategories.Add(serviceCaseModel);
            _context.SaveChanges();



            return CreatedAtAction(nameof(GetById), new { id = serviceCaseModel.Id }, serviceCaseModel.ToCategoryDto());
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteById([FromRoute] int id)
        {

            var serviceCases = _context.LuServiceCaseCategories.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }
            _context.LuServiceCaseCategories.Remove(serviceCases);
            _context.SaveChanges();



            return Ok(serviceCases.ToCategoryDto());

        }
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            var allServiceCases = _context.LuServiceCaseCategories.ToList();

            if (!allServiceCases.Any())
            {
                return NoContent();
            }

            _context.LuServiceCaseCategories.RemoveRange(allServiceCases);
            _context.SaveChanges();

            return Ok();
        }



    }
}

