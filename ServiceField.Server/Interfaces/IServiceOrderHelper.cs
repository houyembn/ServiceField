using ServiceField.Server.Models.ServiceField;
using ServiceField.Server.Models.ServiceField.Server.Models;

namespace ServiceField.Server.Interfaces
{
    public interface IServiceOrderHelper
    {
        ServiceObject GetServiceObjectByName(string name);
        ServiceType GetServiceTypeByName(string name);
        Invoicing GetInvoicingByType(string type);
        Users GetInitiatorByName(string name);
    }
}
