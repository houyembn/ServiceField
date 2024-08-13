using ServiceField.Server.Models.ServiceField;
using ServiceField.Server.Dtos.ServiceCase;

namespace ServiceField.Server.Mappers
{
    public static class SkillsMapper
    {
        public static SkillsDto ToSkillsDto(this MDSkills mDSkills)
        {
            return new SkillsDto
            {
                Id = mDSkills.Id,
                Type = mDSkills.Type,
            };
        }
        public static MDSkills ToSkillsCreateDTO(this CreateSkillsRequestDto skillsDto)
        {
            return new MDSkills
            {
                Id = skillsDto.Id,
                Type = skillsDto.Type,


            };

        }
    }
}
