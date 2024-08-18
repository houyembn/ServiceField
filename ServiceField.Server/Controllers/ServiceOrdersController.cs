using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.Orders;
using ServiceField.Server.Interfaces;
using ServiceField.Server.Mappers;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceField.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceOrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IServiceOrderHelper _serviceOrderHelper;

        public ServiceOrdersController(ApplicationDbContext context, IServiceOrderHelper serviceOrderHelper)
        {
            _context = context;
            _serviceOrderHelper = serviceOrderHelper;
        }

        //[HttpGet]
        //public async Task<IActionResult> GetAll()
        //{
        //    var orders = await _context.ServiceOrder
        //        .Select(s => s.ToOrderDto())
        //        .ToListAsync();

        //    return Ok(orders);
        //}

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var orders = await _context.ServiceOrder
                .Include(o => o.ServiceObject)
                .Include(o => o.ServiceType)
                .Include(o => o.Invoicing)
                .Include(o => o.Initiator)
                .Include(o => o.Company)
                .Include(o => o.Installation)
                .Select(s => s.ToOrderDto())
                .ToListAsync();

            return Ok(orders);
        }


        //[HttpGet("{idOrder}")]
        //public async Task<IActionResult> GetById([FromRoute] int idOrder)
        //{
        //    var order = await _context.ServiceOrder
        //        .Where(o => o.IdOrder == idOrder)
        //        .FirstOrDefaultAsync();

        //    if (order == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(order.ToOrderDto());
        //}


        [HttpGet("{idOrder}")]
        public async Task<IActionResult> GetById([FromRoute] int idOrder)
        {
            var order = await _context.ServiceOrder
                .Include(o => o.ServiceObject)
                .Include(o => o.ServiceType)
                .Include(o => o.Invoicing)
                .Include(o => o.Initiator)
                .Include(o => o.Company)
                .Include(o => o.Installation)
                .FirstOrDefaultAsync(o => o.IdOrder == idOrder);

            if (order == null)
            {
                return NotFound();
            }

            return Ok(order.ToOrderDto());
        }

        [HttpGet("service-types-count")]
        public async Task<IActionResult> GetServiceTypesCount()
        {
            var serviceTypesCount = await _context.ServiceOrder
                .GroupBy(o => o.ServiceType.ServiceTypeName)
                .Select(g => new
                {
                    ServiceType = g.Key,
                    Count = g.Count()
                })
                .ToListAsync();

            return Ok(serviceTypesCount);
        }

        [HttpGet("service-invoicing-count")]
        public async Task<IActionResult> GetInvoicingCount()
        {
            var invoicingCount = await _context.ServiceOrder
                .GroupBy(o => o.Invoicing.InvoicingType)
                .Select(g => new
                {
                    Invoicing = g.Key,
                    Count = g.Count()
                })
                .ToListAsync();

            return Ok(invoicingCount);
        }


        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateOrderRequestDto orderDto)
        {
            var orderModel = orderDto.ToOrderFromCreateDTO(_serviceOrderHelper);

            _context.ServiceOrder.Add(orderModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { idOrder = orderModel.IdOrder }, orderModel.ToOrderDto());
        }

        [HttpDelete("{idOrder}")]
        public async Task<IActionResult> Delete([FromRoute] int idOrder)
        {
            var orderModel = await _context.ServiceOrder
                .Where(x => x.IdOrder == idOrder)
                .FirstOrDefaultAsync();

            if (orderModel == null)
            {
                return NotFound();
            }

            _context.ServiceOrder.Remove(orderModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{idOrder}")]
        public async Task<IActionResult> Update([FromRoute] int idOrder, [FromBody] UpdateOrderRequestDto updateDto)
        {
            var orderModel = await _context.ServiceOrder
                .Where(x => x.IdOrder == idOrder)
                .FirstOrDefaultAsync();

            if (orderModel == null)
            {
                return NotFound();
            }

            orderModel.OrderNumber = updateDto.OrderNumber;
            orderModel.ServiceObject = _serviceOrderHelper.GetServiceObjectByName(updateDto.ServiceObject);
            orderModel.CompanyName = updateDto.CompanyName;
            orderModel.InstallationName = updateDto.InstallationName;
            orderModel.InitiatorName = updateDto.InitiatorName;
            orderModel.InitiatorContact = updateDto.InitiatorContact;
            orderModel.ServiceType = _serviceOrderHelper.GetServiceTypeByName(updateDto.ServiceType);
            orderModel.Invoicing = _serviceOrderHelper.GetInvoicingByType(updateDto.Invoicing);
            orderModel.Message = updateDto.Message;
            orderModel.Address = updateDto.Address;
            orderModel.ContactPerson = updateDto.ContactPerson;
            orderModel.Location = updateDto.Location;

            await _context.SaveChangesAsync();

            return Ok(orderModel.ToOrderDto());
        }
    }
}
