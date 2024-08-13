﻿using Microsoft.EntityFrameworkCore;
using ServiceField.Server.Models.ServiceField;
using ServiceField.Server.Models.ServiceField.Server.Models;

namespace ServiceField.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<ServiceCase> ServiceCase { get; set; }
        public DbSet<LuServiceCaseCategory> LuServiceCaseCategories { get; set; }
        public DbSet<LuServiceObject> LuServiceObjects { get; set; }
        public DbSet<MDCheckList> MDCheckLists { get; set; }
        public DbSet<MDElement> MDElements { get; set; }
        public DbSet<MDSkills> MDSkills { get; set; }



        public DbSet<Invoicing> Invoicing { get; set; }
        public DbSet<ServiceObject> ServiceObject { get; set; }
        public DbSet<ServiceType> ServiceType { get; set; }

        public DbSet<ServiceOrder> ServiceOrder { get; set; }
        public DbSet<Users> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            
        }
    }
}


