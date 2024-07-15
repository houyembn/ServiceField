using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Dtos.Orders
{
    public class OrdersDto
    {

        public int IdCaseOrder { get; set; }
        public int IdCompany { get; set; }

        public string CompanyName { get; set; }

        public string Description { get; set; }

        public string ServiceType { get; set; }

        public DateTime OpenedDate { get; set; }

        public int Status { get; set; }

        public int IdTechnician { get; set; }

        public string TechnicianName { get; set; }

        public DateTime ClosedDate { get; set; }

        public string Summary { get; set; }

        public string CompanySatisfaction { get; set; }
    }
}
