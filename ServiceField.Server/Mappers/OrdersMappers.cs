using ServiceField.Server.Dtos.Orders;
using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Mappers
{
    public static class OrdersMappers
    {
        public static OrdersDto ToOrderDto(this ServiceOrder OrderModel)
        {



            return new OrdersDto
            {
                IdOrder = OrderModel.IdOrder,
                OrderNumber = OrderModel.OrderNumber,
                ServiceObject = OrderModel.ServiceObject,
                IdCompany = OrderModel.IdCompany, 
                CompanyName = OrderModel.CompanyName,
                IdInstallation = OrderModel.IdInstallation,
                InstallationName = OrderModel.InstallationName,
                IdInitiator = OrderModel.IdInitiator,
                InitiatorName = OrderModel.InitiatorName,
                InitiatorContact = OrderModel.InitiatorContact,
                ServiceType = OrderModel.ServiceType,
                Invoicing = OrderModel.Invoicing,
                Message = OrderModel.Message,
                Address = OrderModel.Address,
                ContactPerson = OrderModel.ContactPerson,
                Location = OrderModel.Location,
            };
        }

        public static ServiceOrder ToOrderFromCreateDTO(this CreateOrderRequestDto OrderDto)
        {
            return new ServiceOrder
            {

                OrderNumber = OrderDto.OrderNumber,
                ServiceObject = OrderDto.ServiceObject,
                IdCompany = OrderDto.IdCompany,
                CompanyName = OrderDto.CompanyName,
                IdInstallation = OrderDto.IdInstallation,
                InstallationName = OrderDto.InstallationName,
                IdInitiator = OrderDto.IdInitiator,
                InitiatorName = OrderDto.InitiatorName,
                InitiatorContact = OrderDto.InitiatorContact,
                ServiceType = OrderDto.ServiceType,
                Invoicing = OrderDto.Invoicing,
                Message = OrderDto.Message,
                Address = OrderDto.Address,
                ContactPerson = OrderDto.ContactPerson,
                Location = OrderDto.Location,



            };

        }
    }
}
