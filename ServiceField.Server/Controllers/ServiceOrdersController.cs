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
            var orders = _context.ServiceOrder.ToList()
            .Select(s => s.ToOrderDto());

            return Ok(orders);
        }


        [HttpGet("{IdOrder}")]
        public IActionResult GetById([FromRoute] int IdOrder)
        {

            var articles = _context.ServiceOrder.Find(IdOrder);


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

            _context.ServiceOrder.Add(OrderModel);
            _context.SaveChanges();


            return CreatedAtAction(nameof(GetById), new { IdOrder = OrderModel.IdOrder }, OrderModel.ToOrderDto());


        }
    }
}