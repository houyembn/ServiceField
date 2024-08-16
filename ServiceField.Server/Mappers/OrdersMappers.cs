using ServiceField.Server.Dtos.Orders;
using ServiceField.Server.Interfaces;
using ServiceField.Server.Models.ServiceField;

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
                CompanyName = OrderModel.Company?.name,
                InstallationName = OrderModel.Installation?.InstallationType,
                InitiatorName = OrderModel.InitiatorName,
                InitiatorContact = OrderModel.InitiatorContact,
                ServiceType = OrderModel.ServiceType?.ServiceTypeName,
                Invoicing = OrderModel.Invoicing?.InvoicingType,
                Message = OrderModel.Message,
                Address = OrderModel.Company?.ParentCopmany,
                ContactPerson = OrderModel.Company?.ResponsableUser, 
                Location = OrderModel.Company?.position,
            };
        }


        public static ServiceOrder ToOrderFromCreateDTO(this CreateOrderRequestDto OrderDto, IServiceOrderHelper serviceOrderHelper)
        {
            var initiator = serviceOrderHelper.GetInitiatorByName(OrderDto.InitiatorName);
            return new ServiceOrder
            {
                OrderNumber = OrderDto.OrderNumber,
                ServiceObject = serviceOrderHelper.GetServiceObjectByName(OrderDto.ServiceObject),
                IdCompany = OrderDto.IdCompany,
                CompanyName = OrderDto.CompanyName,
                IdInstallation = OrderDto.IdInstallation,
                InstallationName = OrderDto.InstallationName,
                IdInitiator = initiator?.Id ?? 0, 
                InitiatorName = initiator != null ? $"{initiator.FirstName} {initiator.LastName}" : null,
                InitiatorContact = initiator != null ? $"{initiator.Email}, {initiator.PhoneNumber}" : null,
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
