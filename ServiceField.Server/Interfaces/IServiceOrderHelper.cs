using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Interfaces
{
    public interface IServiceOrderHelper
    {
        ServiceObject GetServiceObjectByName(string name);
        ServiceType GetServiceTypeByName(string name);
        Invoicing GetInvoicingByType(string type);
    }
}
