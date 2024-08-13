using ServiceField.Server.Dtos.Invoicing;
using ServiceField.Server.Dtos.Orders;
using ServiceField.Server.Models.ServiceField;

namespace ServiceField.Server.Mappers
{
    public static class InvoicingMappers
    {

        public static InvoicingDto ToInvoicingDto(this Invoicing InvoicingModel)
        {



            return new InvoicingDto
            {
                InvoicingId = InvoicingModel.InvoicingId,
                InvoicingType = InvoicingModel.InvoicingType,
                TermsAndConditions = InvoicingModel.TermsAndConditions,
                PaymentMethod = InvoicingModel.PaymentMethod,
                RecurringPeriod = InvoicingModel.RecurringPeriod,

            };
        }

        public static Invoicing ToInvoicingrFromCreateDTO(this CreateInvoicingRequestDto InvoicingDto)
        {
            return new Invoicing
            {

                InvoicingType = InvoicingDto.InvoicingType,
                TermsAndConditions = InvoicingDto.TermsAndConditions,
                PaymentMethod = InvoicingDto.PaymentMethod,
                RecurringPeriod = InvoicingDto.RecurringPeriod,



            };

        }

    }
}
