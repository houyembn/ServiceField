using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.Invoicing;
using ServiceField.Server.Dtos.ServiceType;
using ServiceField.Server.Mappers;

namespace ServiceField.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceTypeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServiceTypeController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var Type = _context.ServiceType.ToList()
            .Select(s => s.ToServiceTypeDto());

            return Ok(Type);
        }


        [HttpGet("{ServiceTypeId}")]
        public IActionResult GetById([FromRoute] int ServiceTypeId)
        {

            var Type = _context.ServiceType.Find(ServiceTypeId);


            if (Type == null)
            {
                return NotFound();

            }

            return Ok(Type.ToServiceTypeDto());

        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateServiceTypeRequestDto ServiceTypeDto)
        {


            var ServiceTypeModel = ServiceTypeDto.ToServiceTypeFromCreateDTO();

            _context.ServiceType.Add(ServiceTypeModel);
            _context.SaveChanges();


            return CreatedAtAction(nameof(GetById), new { ServiceTypeId = ServiceTypeModel.ServiceTypeId }, ServiceTypeModel.ToServiceTypeDto());


        }

        [HttpDelete]
        [Route("{ServiceTypeId}")]
        public IActionResult Delete([FromRoute] int ServiceTypeId)
        {
            var ServiceTypeModel = _context.ServiceType.FirstOrDefault(x => x.ServiceTypeId == ServiceTypeId);
            {
                if (ServiceTypeModel == null)
                {
                    return NotFound();
                }
                _context.ServiceType.Remove(ServiceTypeModel);
                _context.SaveChanges();
                return NoContent();

            }
        }


        [HttpPut]
        [Route("{ServiceTypeId}")]
        public IActionResult Update([FromRoute] int ServiceTypeId, [FromBody] UpdateServiceTypeRequestDto updateDto)
        {
            var ServiceTypeModel = _context.ServiceType.FirstOrDefault(x => x.ServiceTypeId == ServiceTypeId);
            {
                if (ServiceTypeModel == null)
                {
                    return NotFound();
                }



                ServiceTypeModel.ServiceTypeName = updateDto.ServiceTypeName;
                ServiceTypeModel.Description = updateDto.Description;
                ServiceTypeModel.Category = updateDto.Category;
                ServiceTypeModel.IsActive = updateDto.IsActive;

                _context.SaveChanges();
                return Ok(ServiceTypeModel.ToServiceTypeDto());

            }
        }
    }
}

