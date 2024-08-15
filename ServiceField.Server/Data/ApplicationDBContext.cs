using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Models;
using ServiceField.Server.Models.ServiceField.Server.Models;

namespace ServiceField.Server.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
            :base(dbContextOptions)
        {

        }

        public DbSet<ServiceCase> ServiceCases { get; set; }
        public DbSet<LuServiceCaseCategory> LuServiceCaseCategories { get; set; }
        public DbSet<LuServiceObject> LuServiceObjects { get; set; }
        public DbSet<MDCheckList> MDCheckLists { get; set; }
        public DbSet<MDElement> MDElements { get; set; }
        public DbSet<MDSkills> MDSkills { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Login> Logins { get; set; }
        public DbSet<Company> Company { get; set; }
        public DbSet<MasterDataCompany> MasterDataCompanies { get; set; }
        public DbSet<Article> Articles { get; set; }

        public DbSet<ItemType> ItemTypes { get; set; }

        public DbSet<User> Users { get; set; }  // Add this line
    


}
}
