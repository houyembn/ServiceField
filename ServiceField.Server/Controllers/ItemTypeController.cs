using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Data;
using ServiceField.Server.Models;

namespace ServiceField.Server.Controllers
{



    [ApiController]
    [Route("ServiceField.Server/ItemTypes")]
    public class ItemTypesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ItemTypesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetItemTypes()
        {
            var itemTypes = await _context.ItemTypes.ToListAsync();
            if (itemTypes == null || !itemTypes.Any())
            {
                return NotFound("No item types found.");
            }

            return Ok(itemTypes);
        }
        [HttpPost]
        public async Task<IActionResult> PostItemType([FromBody] ItemType newItemType)
        {
            if (newItemType == null || string.IsNullOrWhiteSpace(newItemType.Type) || string.IsNullOrWhiteSpace(newItemType.Value))
            {
                return BadRequest("Invalid item type data.");
            }

            _context.ItemTypes.Add(newItemType);
            await _context.SaveChangesAsync();

            return Ok(newItemType);
        }
    }
}
