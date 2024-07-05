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
        public IActionResult CheckClientCase(int idCase)
        {
            var clientCase = _context.ServiceCases
                .FirstOrDefault(c => c.IdCase == idCase);

            if (clientCase != null)
            {
                return Ok(clientCase); // Return the case as JSON
            }
            else
            {
                return Ok("Service Case not found");
            }
        }
    }
}