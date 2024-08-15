using ServiceField.Server.Dtos.Company;
using ServiceField.Server.Models;

namespace ServiceField.Server.Mappers
{
    public static class CompanyMappers
    {
        public static CompanyDto ToCompanyDto(Company companyModel) => new CompanyDto
        {
            Id = companyModel.Id,
            Name = companyModel.name,
            Email = companyModel.email,
            Type = companyModel.type,
            Website = companyModel.website,
            Position = companyModel.position,
            ResponsibleUser = companyModel.ResponsableUser,
            Description = companyModel.description,
            phone = companyModel.phone,
            SourceType = companyModel.sourceType,
            ParentCompany = companyModel.ParentCopmany,
            Subsidiary = companyModel.Subsidiary
        };

        public static Company ToCompanyFromCreateDto(this CreateCompanyRequestDto companyDto)
        {
            return new Company
            {
                name = companyDto.name,
                email = companyDto.email,
                type = companyDto.type,
                website = companyDto.type,
                position = companyDto.position,
                ResponsableUser = companyDto.ResponsableUser,
                description = companyDto.description,
                Phone = companyDto.phone,
                sourceType = companyDto.sourceType,
                ParentCopmany = companyDto.ParentCopmany,
                Subsidiary = companyDto.Subsidiary
            };
        }
    }
}
