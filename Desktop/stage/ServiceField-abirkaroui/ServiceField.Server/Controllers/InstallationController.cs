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
        private readonly ApplicationDBContext _context;
        public InstallationController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var installations = _context.Installations.ToList()
                .Select(s => s.ToInstallationDto());

            return Ok(installations);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var installation = _context.Installations.Find(id);

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

            _context.Installations.Add(installationModel);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = installationModel.InstallationNumber }, installationModel.ToInstallationDto());
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] UpdateInstallationRequestDto updateInstallationDto)
        {
            var installation = _context.Installations.Find(id);

            if (installation == null)
            {
                return NotFound();
            }

            installation.UpdateFromDto(updateInstallationDto);

            _context.Installations.Update(installation);
            _context.SaveChanges();

            return Ok(installation.ToInstallationDto());
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById([FromRoute] int id)
        {
            var installation = _context.Installations.Find(id);

            if (installation == null)
            {
                return NotFound();
            }

            _context.Installations.Remove(installation);
            _context.SaveChanges();

            return Ok(installation.ToInstallationDto());
        }

        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            var allInstallations = _context.Installations.ToList();

            if (!allInstallations.Any())
            {
                return NoContent();
            }

            _context.Installations.RemoveRange(allInstallations);
            _context.SaveChanges();

            return Ok();
        }
    }
}
