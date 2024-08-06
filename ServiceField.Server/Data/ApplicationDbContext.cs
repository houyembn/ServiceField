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
        public DbSet<Invoicing> Invoicing { get; set; }
        public DbSet<ServiceObject> ServiceObject { get; set; }
        public DbSet<ServiceType> ServiceType { get; set; }

        public DbSet<ServiceOrder> ServiceOrder { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<ServiceCases>();
        }
    }
}


