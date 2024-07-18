using ServiceField.Server.Dtos.ServiceCase;
using ServiceField.Server.Models;

namespace ServiceField.Server.Mappers
{
    public static class CheckListMapper
    {
        public static CheckListDto ToCheckListDto(this MDCheckList mDCheckList)
        {
            return new CheckListDto
            {
                Id = mDCheckList.Id,
                Type = mDCheckList.Type,
            };
        }
        public static MDCheckList ToCheckListCreateDTO(this CreateCheckListRequestDto checkListDto)
        {
            return new MDCheckList
            {
                Id = checkListDto.Id,
                Type = checkListDto.Type,


            };

        }
    }
}
