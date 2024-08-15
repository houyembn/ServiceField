using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace ServiceField.Server.Dtos.Company
{
    public class CompanyDto
    {
      
            public int Id { get; set; }
            public string Name { get; set; }
            public string Email { get; set; }
            public string Type { get; set; }
            public string Website { get; set; }
            public string Position { get; set; }
            public string ResponsibleUser { get; set; }
            public string Description { get; set; }
            public string phone { get; set; }
            public string SourceType { get; set; }
            public string ParentCompany { get; set; }
            public string Subsidiary { get; set; }
        }
    }
