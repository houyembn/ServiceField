using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Models;

namespace ServiceField.Server.Controllers
{



    [ApiController]
    [Route("ServiceField.Server/ItemTypes")]
    public class ItemTypeController : ControllerBase
    {


        // Simulated database or service with item types
        private static readonly List<ItemType> itemTypes = new List<ItemType>
    {
        new ItemType { Id = 1, Name = "Material" },
        new ItemType { Id = 2, Name = "Goods" },
        new ItemType { Id = 3, Name = "Service" }
        // Add more item types as needed
    };

        [HttpGet]
        public ActionResult<IEnumerable<ItemType>> GetItemTypes()
        {
            return Ok(itemTypes);
        }

        // Optionally, add more actions such as GetById, Post, Put, Delete, etc.



    }
}
