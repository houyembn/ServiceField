using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.Orders;
using ServiceField.Server.Mappers;

namespace ServiceField.Server.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ServiceOrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServiceOrdersController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult GetAll()
        {
            var orders = _context.ServiceOrders.ToList()
            .Select(s => s.ToOrderDto());

            return Ok(orders);
        }


        [HttpGet("{IdCaseOrder}")]
        public IActionResult GetById([FromRoute] int IdCaseOrder)
        {

            var articles = _context.ServiceOrders.Find(IdCaseOrder);


            if (articles == null)
            {
                return NotFound();

            }

            return Ok(articles.ToOrderDto());

        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateOrderRequestDto OrdersDto)
        {


            var OrderModel = OrdersDto.ToOrderFromCreateDTO();

            _context.ServiceOrders.Add(OrderModel);
            _context.SaveChanges();


            return CreatedAtAction(nameof(GetById), new { IdCaseOrder = OrderModel.IdCaseOrder }, OrderModel.ToOrderDto());


        }
    }
}