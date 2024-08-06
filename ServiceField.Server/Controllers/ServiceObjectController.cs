using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.Invoicing;
using ServiceField.Server.Dtos.Orders;
using ServiceField.Server.Dtos.ServiceObject;
using ServiceField.Server.Mappers;
using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceObjectController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServiceObjectController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult GetAll()
        {
            var Object = _context.ServiceObject.ToList()
            .Select(s => s.ToServiceObjectDto());

            return Ok(Object);
        }


        [HttpGet("{ServiceObjectId}")]
        public IActionResult GetById([FromRoute] int ServiceObjectId)
        {

            var Object = _context.ServiceObject.Find(ServiceObjectId);


            if (Object == null)
            {
                return NotFound();

            }

            return Ok(Object.ToServiceObjectDto());

        }


        [HttpPost]
        public IActionResult Create([FromBody] CreateServiceObjectRequestDto ServiceObjectDto)
        {


            var ServiceObjectModel = ServiceObjectDto.ToServiceObjectFromCreateDTO();

            _context.ServiceObject.Add(ServiceObjectModel);
            _context.SaveChanges();


            return CreatedAtAction(nameof(GetById), new { ServiceObjectId = ServiceObjectModel.ServiceObjectId }, ServiceObjectModel.ToServiceObjectDto());


        }

        [HttpDelete]
        [Route("{ServiceObjectId}")]
        public IActionResult Delete([FromRoute] int ServiceObjectId)
        {
            var ServiceObjectModel = _context.ServiceObject.FirstOrDefault(x => x.ServiceObjectId == ServiceObjectId);
            {
                if (ServiceObjectModel == null)
                {
                    return NotFound();
                }
                _context.ServiceObject.Remove(ServiceObjectModel);
                _context.SaveChanges();
                return NoContent();

            }
        }


        [HttpPut]
        [Route("{ServiceObjectId}")]
        public IActionResult Update([FromRoute] int ServiceObjectId, [FromBody] UpdateServiceObjectRequestDto updateDto)
        {
            var ServiceObjectModel = _context.ServiceObject.FirstOrDefault(x => x.ServiceObjectId == ServiceObjectId);
            {
                if (ServiceObjectModel == null)
                {
                    return NotFound();
                }

               

                ServiceObjectModel.ServiceObjectName = updateDto.ServiceObjectName;
                ServiceObjectModel.ServiceObjectDescription = updateDto.ServiceObjectDescription;
              
                _context.SaveChanges();
                return Ok(ServiceObjectModel.ToServiceObjectDto());

            }
        }
    }
}
