using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Mappers;

namespace ServiceField.Server.Controllers
{
    [ApiController]
    [Route("ServiceField/Skills")]
    public class SkillsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public SkillsController(ApplicationDBContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAll()
        {


            var serviceCases = _context.MDSkills.ToList()
                .Select(s => s.ToSkillsDto());

            return Ok(serviceCases);
        }


        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {

            var serviceCases = _context.MDSkills.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }

            return Ok(serviceCases.ToSkillsDto());

        }
        [HttpPost]
        public IActionResult Create([FromBody] CreateSkillsRequestDto SkillsDto)
        {

            var serviceCaseModel = SkillsDto.ToSkillsCreateDTO();

            _context.MDSkills.Add(serviceCaseModel);
            _context.SaveChanges();



            return CreatedAtAction(nameof(GetById), new { id = serviceCaseModel.Id }, serviceCaseModel.ToSkillsDto());
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteById([FromRoute] int id)
        {

            var serviceCases = _context.MDSkills.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }
            _context.MDSkills.Remove(serviceCases);
            _context.SaveChanges();



            return Ok(serviceCases.ToSkillsDto());

        }
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            var allServiceCases = _context.MDSkills.ToList();

            if (!allServiceCases.Any())
            {
                return NoContent();
            }

            _context.MDSkills.RemoveRange(allServiceCases);
            _context.SaveChanges();

            return Ok();
        }

    }
}
