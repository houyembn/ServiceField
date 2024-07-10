using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
            : base(dbContextOptions)
        {
        }

        public DbSet<ServiceCase> ServiceCase { get; set; }

        public DbSet<ServiceOrders> ServiceOrders { get; set; }


    }
}

