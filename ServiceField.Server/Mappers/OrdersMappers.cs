using ServiceField.Server.Dtos.Orders;
using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Mappers
{
    public static class OrdersMappers
    {
        public static OrdersDto ToOrderDto(this ServiceOrders OrderModel)
        {



            return new OrdersDto
            {
                IdCaseOrder = OrderModel.IdCaseOrder,
                IdCompany = OrderModel.IdCompany,
                Description = OrderModel.Description,
                CompanyName = OrderModel.CompanyName,
                ServiceType = OrderModel.ServiceType,
                OpenedDate = OrderModel.OpenedDate,
                Status = OrderModel.Status,
                IdTechnician = OrderModel.IdTechnician,
                TechnicianName = OrderModel.TechnicianName,
                ClosedDate = OrderModel.ClosedDate,
                Summary = OrderModel.Summary,
                CompanySatisfaction = OrderModel.CompanySatisfaction,
            };
        }

        public static ServiceOrders ToOrderFromCreateDTO(this CreateOrderRequestDto OrderDto)
        {
            return new ServiceOrders
            {

                IdCompany = OrderDto.IdCompany,
                Description = OrderDto.Description,
                CompanyName = OrderDto.CompanyName,
                ServiceType = OrderDto.ServiceType,
                OpenedDate = OrderDto.OpenedDate,
                Status = OrderDto.Status,
                IdTechnician = OrderDto.IdTechnician,
                TechnicianName = OrderDto.TechnicianName,
                ClosedDate = OrderDto.ClosedDate,
                Summary = OrderDto.Summary,
                CompanySatisfaction = OrderDto.CompanySatisfaction,



            };

        }
    }
}
