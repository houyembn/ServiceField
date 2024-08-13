using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Data;
using ServiceField.Server.Models.ServiceField.Server.Models;

namespace ServiceField.Server.Controllers
{
    [ApiController]
    [Route("ServiceField.Server/User")]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _context.Users.ToList();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Users user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] Users updatedUser)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            user.Email = updatedUser.Email;
            user.FirstName = updatedUser.FirstName;
            user.LastName = updatedUser.LastName;
            user.Password = updatedUser.Password;
            user.CIN = updatedUser.CIN;
            user.Age = updatedUser.Age;
            user.Address = updatedUser.Address;
            user.PhoneNumber = updatedUser.PhoneNumber;
            user.Diploma = updatedUser.Diploma;
            user.Field = updatedUser.Field;
            user.Skills = updatedUser.Skills;
            user.Grade = updatedUser.Grade;
            user.role  = updatedUser.role;
            

            await _context.SaveChangesAsync();
            return Ok(user);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return NoContent();
     
        }

        //[HttpPost("Login")]
        //public IActionResult Login([FromBody] LoginRequest request)
        //{
        //    var user = _context.Users.SingleOrDefault(u => u.Email == request.Email && u.Password == request.Password);

        //    if (user == null)
        //    {
        //        return Unauthorized(new { success = false, message = "Invalid email or password" });
        //    }

        //    // Optionally, create a token or session and return it
        //    return Ok(new { success = true });
        //}


        [HttpPost("Login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var user = _context.Users.SingleOrDefault(u => u.Email == request.Email && u.Password == request.Password);

            if (user == null)
            {
                return Unauthorized(new { success = false, message = "Invalid email or password" });
            }

           
            return Ok(new { success = true, role = user.role });
        }


        // GET: api/Users/{email}
        [HttpGet("email/{email}")]
        public async Task<IActionResult> GetUserByEmail(string email)
        {
            if (string.IsNullOrEmpty(email))
            {
                return BadRequest("Email parameter is required.");
            }

            var user = await _context.Users
                .Where(u => u.Email == email)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return NotFound("User not found.");
            }

            return Ok(user);
        }


    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }


}