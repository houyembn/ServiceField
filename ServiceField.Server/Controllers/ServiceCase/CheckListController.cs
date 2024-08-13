using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Mappers;
using ServiceField.Server.Mappers.ServiceCase;

namespace ServiceField.Server.Controllers
{
    [ApiController]
    [Route("ServiceField/CheckList")]
    public class CheckListController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public CheckListController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAll()
        {


            var serviceCases = _context.MDCheckLists.ToList()
                .Select(s => s.ToCheckListDto());

            return Ok(serviceCases);
        }


        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {

            var serviceCases = _context.MDCheckLists.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }

            return Ok(serviceCases.ToCheckListDto());

        }
        [HttpPost]
        public IActionResult Create([FromBody] CreateCheckListRequestDto CheckListDto)
        {

            var serviceCaseModel = CheckListDto.ToCheckListCreateDTO();

            _context.MDCheckLists.Add(serviceCaseModel);
            _context.SaveChanges();



            return CreatedAtAction(nameof(GetById), new { id = serviceCaseModel.Id }, serviceCaseModel.ToCheckListDto());
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteById([FromRoute] int id)
        {

            var serviceCases = _context.MDCheckLists.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }
            _context.MDCheckLists.Remove(serviceCases);
            _context.SaveChanges();



            return Ok(serviceCases.ToCheckListDto());

        }
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            var allServiceCases = _context.MDCheckLists.ToList();

            if (!allServiceCases.Any())
            {
                return NoContent();
            }

            _context.MDCheckLists.RemoveRange(allServiceCases);
            _context.SaveChanges();

            return Ok();
        }

    }
}
