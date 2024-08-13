using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Mappers;

namespace ServiceField.Server.Controllers
{
    [ApiController]
    [Route("ServiceField/Object")]
    public class ObjectController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ObjectController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAll()
        {


            var serviceCases = _context.LuServiceObjects.ToList()
                .Select(s => s.ToObjectDto());

            return Ok(serviceCases);
        }


        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {

            var serviceCases = _context.LuServiceObjects.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }

            return Ok(serviceCases.ToObjectDto());

        }
        [HttpPost]
        public IActionResult Create([FromBody] CreateObjectRequestDto ObjectDto)
        {

            var serviceCaseModel = ObjectDto.ToObjectCreateDTO();

            _context.LuServiceObjects.Add(serviceCaseModel);
            _context.SaveChanges();



            return CreatedAtAction(nameof(GetById), new { id = serviceCaseModel.Id }, serviceCaseModel.ToObjectDto());
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteById([FromRoute] int id)
        {

            var serviceCases = _context.LuServiceObjects.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }
            _context.LuServiceObjects.Remove(serviceCases);
            _context.SaveChanges();



            return Ok(serviceCases.ToObjectDto());

        }
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            var allServiceCases = _context.LuServiceObjects.ToList();

            if (!allServiceCases.Any())
            {
                return NoContent();
            }

            _context.LuServiceObjects.RemoveRange(allServiceCases);
            _context.SaveChanges();

            return Ok();
        }

    }
}
