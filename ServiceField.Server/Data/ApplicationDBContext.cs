using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Models;

namespace ServiceField.Server.Data
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
            : base(dbContextOptions)
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


    }
}
