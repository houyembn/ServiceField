/*using Microsoft.AspNetCore.Mvc;
using ServiceField.Server.Data;
using ServiceField.Server.Dtos.Company;
using ServiceField.Server.Mappers;

namespace ServiceField.Server.Controllers
{


    [ApiController]
    [Route("ServiceField.Server/Company")]
    public class ControllerCompany : ControllerBase
    {

        private readonly ApplicationDBContext _context;
        public ControllerCompany(ApplicationDBContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult GetAll()
        {


            var Companies = _context.Company.ToList()
                .Select(c => c.ToCompanyDto());

            return Ok(Companies);
        }
        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {

            var Companies = _context.Company.Find(id);


            if (Companies == null)
            {
                return NotFound();

            }

            return Ok(Companies.ToCompanyDto());


        }


        [HttpPost]
        public IActionResult Create([FromBody] CreateCompanyRequestDto CompanyDto)
        {


            var CompanyModel = CompanyDto.ToCompanyFromCreateDto();

            _context.Company.Add(CompanyModel);
            _context.SaveChanges();


            return CreatedAtAction(nameof(GetById), new { id = CompanyModel.Id }, CompanyModel.ToCompanyDto());


        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var company = _context.Company.Find(id);

            if (company == null)
            {
                return NotFound();
            }

            _context.Company.Remove(company);
            _context.SaveChanges();

            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromRoute] UpdateCompanyRequestDto CompanyDto)
        {

            var company = _context.Company.Find(id);

            if (company == null)
            {
                return NotFound();
            }

            // Update the company entity based on the DTO
            CompanyDto.UpdateCompanyFromDto(company); // Assuming this method updates the company entity

            _context.SaveChanges();

            return Ok(company.ToCompanyDto());
        }
    }
}
*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Data;
using ServiceField.Server.Models;

[ApiController]
[Route("api/[controller]")]
public class MasterDataCompaniesController : ControllerBase
{
    private readonly ApplicationDBContext _context;
   

    public MasterDataCompaniesController(ApplicationDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<MasterDataCompany>>> GetMasterDataCompanies()
    {
        return await _context.MasterDataCompanies.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<MasterDataCompany>> GetMasterDataCompany(int id)
    {
        var masterDataCompany = await _context.MasterDataCompanies.FindAsync(id);

        if (masterDataCompany == null)
        {
            return NotFound();
        }

        return masterDataCompany;
    }

    [HttpPost]
    public async Task<ActionResult<MasterDataCompany>> CreateMasterDataCompany(MasterDataCompany masterDataCompany)
    {
        _context.MasterDataCompanies.Add(masterDataCompany);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetMasterDataCompany), new { id = masterDataCompany.Id }, masterDataCompany);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateMasterDataCompany(int id, MasterDataCompany masterDataCompany)
    {
        if (id != masterDataCompany.Id)
        {
            return BadRequest();
        }

        _context.Entry(masterDataCompany).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!MasterDataCompanyExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMasterDataCompany(int id)
    {
        var masterDataCompany = await _context.MasterDataCompanies.FindAsync(id);
        if (masterDataCompany == null)
        {
            return NotFound();
        }

        _context.MasterDataCompanies.Remove(masterDataCompany);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool MasterDataCompanyExists(int id)
    {
        return _context.MasterDataCompanies.Any(e => e.Id == id);
    }
}
