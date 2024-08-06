using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.Invoicing;
using ServiceField.Server.Dtos.Orders;
using ServiceField.Server.Mappers;
using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoicingController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public InvoicingController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult GetAll()
        {
            var invoicing = _context.Invoicing.ToList()
            .Select(s => s.ToInvoicingDto());

            return Ok(invoicing);
        }


        [HttpGet("{InvoicingId}")]
        public IActionResult GetById([FromRoute] int InvoicingId)
        {

            var articles = _context.Invoicing.Find(InvoicingId);


            if (articles == null)
            {
                return NotFound();

            }

            return Ok(articles.ToInvoicingDto());

        }


        [HttpPost]
        public IActionResult Create([FromBody] CreateInvoicingRequestDto InvoicingDto)
        {


            var InvoicingModel = InvoicingDto.ToInvoicingrFromCreateDTO();

            _context.Invoicing.Add(InvoicingModel);
            _context.SaveChanges();


            return CreatedAtAction(nameof(GetById), new { InvoicingId = InvoicingModel.InvoicingId }, InvoicingModel.ToInvoicingDto());


        }

        [HttpDelete]
        [Route("{InvoicingId}")]
        public IActionResult Delete([FromRoute] int InvoicingId)
        {
            var InvoicingModel = _context.Invoicing.FirstOrDefault(x => x.InvoicingId == InvoicingId);
            {
                if (InvoicingModel == null)
                {
                    return NotFound();
                }
                _context.Invoicing.Remove(InvoicingModel);
                _context.SaveChanges();
                return NoContent();

            }
        }


        [HttpPut]
        [Route("{InvoicingId}")]
        public IActionResult Update([FromRoute] int InvoicingId, [FromBody] UpdateInvoicingRequestDto updateDto)
        {
            var InvoicingModel = _context.Invoicing.FirstOrDefault(x => x.InvoicingId == InvoicingId);
            {
                if (InvoicingModel == null)
                {
                    return NotFound();
                }

                InvoicingModel.InvoicingType = updateDto.InvoicingType;
                InvoicingModel.TermsAndConditions = updateDto.TermsAndConditions;
                InvoicingModel.PaymentMethod = updateDto.PaymentMethod;
                InvoicingModel.RecurringPeriod = updateDto.RecurringPeriod;
                _context.SaveChanges();
                return Ok(InvoicingModel.ToInvoicingDto());

            }
        }
    }
    }