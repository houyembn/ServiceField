using ServiceField.Server.Data;
using ServiceField.Server.Models.ServiceField;
using ServiceField.Server.Models.ServiceField.Server.Models;

namespace ServiceField.Server.Interfaces
{
    public class ServiceOrderHelper : IServiceOrderHelper
    {
        private readonly ApplicationDbContext _context;

        public ServiceOrderHelper(ApplicationDbContext context)
        {
            _context = context;
        }

        public ServiceObject GetServiceObjectByName(string name)
        {
            return _context.ServiceObject.FirstOrDefault(so => so.ServiceObjectName == name);
        }

        public ServiceType GetServiceTypeByName(string name)
        {
            return _context.ServiceType.FirstOrDefault(st => st.ServiceTypeName == name);
        }

        public Invoicing GetInvoicingByType(string type)
        {
            return _context.Invoicing.FirstOrDefault(inv => inv.InvoicingType == type);
        }

        public Users GetInitiatorByName(string name)
        {
            // Assuming 'name' is in the format "FirstName LastName"
            var names = name.Split(' ');
            if (names.Length != 2) return null; // Handle cases where the name is not in the expected format

            var firstName = names[0];
            var lastName = names[1];

            return _context.Users
                .FirstOrDefault(u => u.FirstName == firstName && u.LastName == lastName);
        }
    }
}
