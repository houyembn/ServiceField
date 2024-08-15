using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using ServiceField.Server.Models;
using Microsoft.Extensions.Configuration;
using ServiceField.Server.Data;

namespace ServiceField.Server.Controllers
{
    [Route("ServiceField/SignIn")]
    [ApiController]
    public class AuthentificationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationDBContext _context;

        public AuthentificationController(IConfiguration configuration, ApplicationDBContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost]
        public IActionResult Login([FromBody] Login model)
        {
            // Check if the user exists
            var user = _context.Users.SingleOrDefault(u => u.Email == model.Email && u.Password == model.Password);
            if (user == null)
            {
                return Unauthorized("Invalid credentials");
            }

            // Generate JWT token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.Name, user.FirstName),
                    new Claim(ClaimTypes.Surname, user.LastName),
                    new Claim(ClaimTypes.Role, user.Role),
                    new Claim("CIN", user.CIN),
                    new Claim("Age", user.Age.ToString()),
                    new Claim("Address", user.Address),
                    new Claim("PhoneNumber", user.PhoneNumber.ToString()),
                    new Claim("Diploma", user.Diploma),
                    new Claim("Field", user.Field),
                    new Claim("Skills", user.Skills),
                    new Claim("Grade", user.Grade)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Issuer"],
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok(new { Token = tokenString });
        }
    }
}
