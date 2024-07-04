using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Models.ServiceField;
using System.Linq;

namespace ServiceField.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceCasesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServiceCasesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ServiceCases/CheckClientCase?idClient=5
        [HttpGet("CheckClientCase")]
        public IActionResult CheckClientCase(int idClient)
        {
            var clientCases = _context.ServiceCases
                .Where(c => c.IdClient == idClient)
                .ToList();

            if (clientCases.Any())
            {
                return Ok("Service Case found");
            }
            else
            {
                return Ok("Service Case not found");
            }
        }
    }
}
