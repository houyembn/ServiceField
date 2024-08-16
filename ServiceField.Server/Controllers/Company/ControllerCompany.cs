
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Data;
using ServiceField.Server.Models;

[ApiController]
[Route("api/[controller]")]
public class MasterDataCompaniesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public MasterDataCompaniesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<MasterDataCompany>>> GetMasterDataCompanies()
    {
        return await _context.MasterDataCompany.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<MasterDataCompany>> GetMasterDataCompany(int id)
    {
        var masterDataCompany = await _context.MasterDataCompany.FindAsync(id);

        if (masterDataCompany == null)
        {
            return NotFound();
        }

        return masterDataCompany;
    }

    [HttpPost]
    public async Task<ActionResult<MasterDataCompany>> CreateMasterDataCompany(MasterDataCompany masterDataCompany)
    {
        _context.MasterDataCompany.Add(masterDataCompany);
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
        var masterDataCompany = await _context.MasterDataCompany.FindAsync(id);
        if (masterDataCompany == null)
        {
            return NotFound();
        }

        _context.MasterDataCompany.Remove(masterDataCompany);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool MasterDataCompanyExists(int id)
    {
        return _context.MasterDataCompany.Any(e => e.Id == id);
    }
}
