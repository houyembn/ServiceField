using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using ServiceField.Server.Models;
using Microsoft.EntityFrameworkCore;
namespace ServiceField.Server.Data
{
    public class ApplicationDBContext : DbContext 
    {


        public ApplicationDBContext(DbContextOptions dbContextOptions ) 
            : base(dbContextOptions)
        {

        }
        
        
        public DbSet<Company> Company { get; set; }
    }
}
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<MasterDataCompany> MasterDataCompanies { get; set; }
}
