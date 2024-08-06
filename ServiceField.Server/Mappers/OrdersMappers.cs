using ServiceField.Server.Dtos.Orders;
using ServiceField.Server.Models.ServiceField;
using ServiceField.Server.Interfaces;

namespace ServiceField.Server.Mappers
{
    public static class OrdersMappers
    {
        public static OrdersDto ToOrderDto(this ServiceOrder OrderModel)
        {
            if (OrderModel == null)
            {
                throw new ArgumentNullException(nameof(OrderModel));
            }

            return new OrdersDto
            {
                IdOrder = OrderModel.IdOrder,
                OrderNumber = OrderModel.OrderNumber,
                ServiceObject = OrderModel.ServiceObject?.ServiceObjectName,
                IdCompany = OrderModel.IdCompany,
                CompanyName = OrderModel.CompanyName,
                IdInstallation = OrderModel.IdInstallation,
                InstallationName = OrderModel.InstallationName,
                IdInitiator = OrderModel.IdInitiator,
                InitiatorName = OrderModel.InitiatorName,
                InitiatorContact = OrderModel.InitiatorContact,
                ServiceType = OrderModel.ServiceType?.ServiceTypeName,
                Invoicing = OrderModel.Invoicing?.InvoicingType,
                Message = OrderModel.Message,
                Address = OrderModel.Address,
                ContactPerson = OrderModel.ContactPerson,
                Location = OrderModel.Location,
            };
        }


        public static ServiceOrder ToOrderFromCreateDTO(this CreateOrderRequestDto OrderDto, IServiceOrderHelper serviceOrderHelper)
        {
            return new ServiceOrder
            {
                OrderNumber = OrderDto.OrderNumber,
                ServiceObject = serviceOrderHelper.GetServiceObjectByName(OrderDto.ServiceObject),
                IdCompany = OrderDto.IdCompany,
                CompanyName = OrderDto.CompanyName,
                IdInstallation = OrderDto.IdInstallation,
                InstallationName = OrderDto.InstallationName,
                IdInitiator = OrderDto.IdInitiator,
                InitiatorName = OrderDto.InitiatorName,
                InitiatorContact = OrderDto.InitiatorContact,
                ServiceType = serviceOrderHelper.GetServiceTypeByName(OrderDto.ServiceType),
                Invoicing = serviceOrderHelper.GetInvoicingByType(OrderDto.Invoicing),
                Message = OrderDto.Message,
                Address = OrderDto.Address,
                ContactPerson = OrderDto.ContactPerson,
                Location = OrderDto.Location,
            };
        }

    }
}
