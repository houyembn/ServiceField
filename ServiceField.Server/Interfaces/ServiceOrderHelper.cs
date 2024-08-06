using ServiceField.Server.Data;
using ServiceField.Server.Models.ServiceField;

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

    }
}
