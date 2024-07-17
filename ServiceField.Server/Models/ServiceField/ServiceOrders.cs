using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Models.ServiceField
{
    public class ServiceOrders
    {
        [Key]
        public int IdCaseOrder { get; set; }

        [Required]
        public int IdCompany { get; set; }

        [Required]
        public string CompanyName { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string ServiceType { get; set; }

        [Required]
        public DateTime OpenedDate { get; set; }

        [Required]
        public int Status { get; set; }


        [Required]
        public int IdTechnician { get; set; }

        [Required]
        public string TechnicianName { get; set; }

        [Required]
        public DateTime ClosedDate { get; set; }

        [Required]
        public string Summary { get; set; }


        [Required]
        public string CompanySatisfaction { get; set; }
    }
}