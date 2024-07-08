using Microsoft.AspNetCore.Mvc;

namespace ServiceField.Server.Controllers
{
    public class ServiceOrdersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
