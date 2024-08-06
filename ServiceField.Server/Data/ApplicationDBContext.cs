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

        public DbSet<Article> Articles { get; set; }

        public DbSet<ItemType> ItemTypes { get; set; }

        public DbSet<User> Users { get; set; }  // Add this line



    }
}
