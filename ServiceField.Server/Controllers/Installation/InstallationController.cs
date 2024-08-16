using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.Installation;
using ServiceField.Server.Mappers;
using ServiceField.Server.Models;

namespace ServiceField.Server.Controllers
{
    [ApiController]
    [Route("ServiceField/Installation")]
    public class InstallationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public InstallationController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var installations = _context.Installation.ToList()
                .Select(s => s.ToInstallationDto());

            return Ok(installations);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var installation = _context.Installation.Find(id);

            if (installation == null)
            {
                return NotFound();
            }

            return Ok(installation.ToInstallationDto());
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateInstallationRequestDto installationDto)
        {
            var installationModel = installationDto.ToInstallationCreateDTO();

            _context.Installation.Add(installationModel);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = installationModel.InstallationNumber }, installationModel.ToInstallationDto());
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] UpdateInstallationRequestDto updateInstallationDto)
        {
            var installation = _context.Installation.Find(id);

            if (installation == null)
            {
                return NotFound();
            }

            installation.UpdateFromDto(updateInstallationDto);

            _context.Installation.Update(installation);
            _context.SaveChanges();

            return Ok(installation.ToInstallationDto());
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById([FromRoute] int id)
        {
            var installation = _context.Installation.Find(id);

            if (installation == null)
            {
                return NotFound();
            }

            _context.Installation.Remove(installation);
            _context.SaveChanges();

            return Ok(installation.ToInstallationDto());
        }

        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            var allInstallations = _context.Installation.ToList();

            if (!allInstallations.Any())
            {
                return NoContent();
            }

            _context.Installation.RemoveRange(allInstallations);
            _context.SaveChanges();

            return Ok();
        }
    }
}
