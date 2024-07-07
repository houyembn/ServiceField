using System.ComponentModel.DataAnnotations;

namespace ServiceField.Server.Models
{
    //public enum ProblemType
    //{
    //    Technical_problem,
    //    Billing_Problem,Customer_Support
    //}
    //public enum CompanyName
    //{
    //    L_Mobile,Actia,EY
       
    //}
    //public enum ContractType
    //{
    //    Maintenance_contract, Technical_Suppor_Contract

    //}

    public class ServiceCase
    {
        [Key]
        
        public int Id { get; set; }
        public string CompanyName { get; set; } = "";
        public int ProductSerialNumber { get; set; }
        public string ProblemType { get; set; } = "";
        public string Description { get; set; } = "";
        public string Priority { get; set; } = "";
        public string Contract { get; set; } = "";


        //public CompanyName CompanyName { get; set; }
        //public int ProductSerialNumber { get; set; }
        //public ProblemType ProblemType { get; set; }
        //public string Description { get; set; } = "";
        //public PriorityType Priority { get; set; }
        //public ContractType Contract { get; set; }

    }
}
