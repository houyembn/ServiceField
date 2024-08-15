using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Mappers;

namespace ServiceField.Server.Controllers
{
    [ApiController]
    [Route("ServiceField/Element")]
    public class ElementController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public ElementController(ApplicationDBContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAll()
        {


            var serviceCases = _context.MDElements.ToList()
                .Select(s => s.ToElementDto());

            return Ok(serviceCases);
        }


        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {

            var serviceCases = _context.MDElements.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }

            return Ok(serviceCases.ToElementDto());

        }
        [HttpPost]
        public IActionResult Create([FromBody] CreateElementRequestDto ElementDto)
        {

            var serviceCaseModel = ElementDto.ToElementCreateDTO();

            _context.MDElements.Add(serviceCaseModel);
            _context.SaveChanges();



            return CreatedAtAction(nameof(GetById), new { id = serviceCaseModel.Id }, serviceCaseModel.ToElementDto());
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteById([FromRoute] int id)
        {

            var serviceCases = _context.MDElements.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }
            _context.MDElements.Remove(serviceCases);
            _context.SaveChanges();



            return Ok(serviceCases.ToElementDto());

        }
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            var allServiceCases = _context.MDElements.ToList();

            if (!allServiceCases.Any())
            {
                return NoContent();
            }

            _context.MDElements.RemoveRange(allServiceCases);
            _context.SaveChanges();

            return Ok();
        }
    }
}
