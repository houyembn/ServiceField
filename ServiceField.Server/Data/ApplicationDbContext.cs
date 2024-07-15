using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<ServiceCases> ServiceCases { get; set; }
        public DbSet<ServiceOrders> ServiceOrders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            
            modelBuilder.Entity<ServiceCases>();
        }
    }
}

