using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Mappers;
using ServiceField.Server.Models;

namespace ServiceField.Server.Controllers
{
    [ApiController]
    [Route("ServiceField/Case")]
    public class ServiceCaseController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public ServiceCaseController(ApplicationDBContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAll()
        {


            var serviceCases = _context.ServiceCases.ToList()
                .Select(s => s.ToServiceCaseDto());

            return Ok(serviceCases);
        }


        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {

            var serviceCases = _context.ServiceCases.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }

            return Ok(serviceCases.ToServiceCaseDto());

        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateServiceCaseRequestDto ServiceCaseDto)
        {

            var serviceCaseModel = ServiceCaseDto.ToServiceCaseCreateDTO();

            _context.ServiceCases.Add(serviceCaseModel);
            _context.SaveChanges();



            return CreatedAtAction(nameof(GetById), new { id = serviceCaseModel.Id }, serviceCaseModel.ToServiceCaseDto());
        }
        //[HttpPost]
        //public async Task<IActionResult> Create([FromBody] CreateServiceCaseRequestDto serviceCaseDto)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var serviceCaseModel = serviceCaseDto.ToServiceCaseCreateDTO();

        //    _context.ServiceCases.Add(serviceCaseModel);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction(nameof(GetById), new { id = serviceCaseModel.Id }, serviceCaseModel.ToServiceCaseDto());
        //}


        [HttpDelete("{id}")]
        public IActionResult DeleteById([FromRoute] int id)
        {

            var serviceCases = _context.ServiceCases.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }
            _context.ServiceCases.Remove(serviceCases);
            _context.SaveChanges();

          

            return Ok(serviceCases.ToServiceCaseDto());

        }
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            var allServiceCases = _context.ServiceCases.ToList();

            if (!allServiceCases.Any())
            {
                return NoContent();
            }

            _context.ServiceCases.RemoveRange(allServiceCases);
            _context.SaveChanges();

            return Ok();
        }



    }
}
