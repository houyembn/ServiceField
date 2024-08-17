using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.Orders;
using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Mappers;
using ServiceField.Server.Models;

namespace ServiceField.Server.Controllers
{
    [ApiController]
    [Route("ServiceField/Case")]
    public class ServiceCaseController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ServiceCaseController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAll()
        {


            var serviceCases = _context.ServiceCase.ToList()
                .Select(s => s.ToServiceCaseDto());

            return Ok(serviceCases);
        }


        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {

            var serviceCases = _context.ServiceCase.Find(id);


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
            

            _context.ServiceCase.Add(serviceCaseModel);
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

            var serviceCases = _context.ServiceCase.Find(id);


            if (serviceCases == null)
            {
                return NotFound();

            }
            _context.ServiceCase.Remove(serviceCases);
            _context.SaveChanges();



            return Ok(serviceCases.ToServiceCaseDto());

        }
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            var allServiceCases = _context.ServiceCase.ToList();

            if (!allServiceCases.Any())
            {
                return NoContent();
            }

            _context.ServiceCase.RemoveRange(allServiceCases);
            _context.SaveChanges();

            return Ok();
        }

        // GET: api/ServiceCases/CheckClientCase?idClient=5
        [HttpGet("CheckClientCase")]
        public IActionResult CheckClientCase(int id)
        {
            var clientCase = _context.ServiceCase
                .FirstOrDefault(c => c.Id == id);

            if (clientCase != null)
            {
                return Ok(clientCase); // Return the case as JSON
            }
            else
            {
                return Ok("Service Case not found");
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateServiceCaseRequestDto updateDto)
        {
            var serviceCase = await _context.ServiceCase
                .Where(x => x.Id == id)
                .FirstOrDefaultAsync();

            if (serviceCase == null)
            {
                return NotFound();
            }

            serviceCase.ProductSerialNumber = updateDto.ProductSerialNumber;
            serviceCase.AffectedCompany = updateDto.AffectedCompany;
            serviceCase.ContactPerson = updateDto.ContactPerson;
            serviceCase.AffectedInstallation = updateDto.AffectedInstallation;
            serviceCase.OriginatingSOrder = updateDto.OriginatingSOrder;
            serviceCase.ServiceCaseStatus = updateDto.ServiceCaseStatus;
            serviceCase.ResponsableUser = updateDto.ResponsableUser;
            serviceCase.Priority = updateDto.Priority;
            serviceCase.Message = updateDto.Message;
            serviceCase.Creator = updateDto.Creator;
            serviceCase.CreationDate = updateDto.CreationDate;
            serviceCase.ObjectFK = updateDto.ObjectFK;
            serviceCase.SkillsFK = updateDto.SkillsFK;
            serviceCase.CheckListFK = updateDto.CheckListFK;
            serviceCase.ElementFK = updateDto.ElementFK;
            serviceCase.CategoryFK = updateDto.CategoryFK;

            await _context.SaveChangesAsync();

            return Ok(serviceCase.ToServiceCaseDto());
        }

    }
}
