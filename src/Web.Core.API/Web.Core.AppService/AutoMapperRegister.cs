using AutoMapper;
using Web.Core.AppService.DTO;
using Web.Core.AppService.Models;

namespace Web.Core.AppService
{
    public class AutoMapperRegister: Profile
    {
        public AutoMapperRegister()
        {
            // Add as many of these lines as you need to map your objects

            CreateMap<Account, AccountRequestDTO>()
                .ForMember(dest => dest.Login, opt => opt.MapFrom(src => src.Login))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password))
                .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address))
                .ForMember(dest => dest.IsActive, opt => opt.MapFrom(src => src.IsActive))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.Phone, opt => opt.MapFrom(src => src.Phone))
                .ForMember(dest => dest.Avatar, opt => opt.MapFrom(src => src.Avatar))
                .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Gender))
                .ForMember(dest => dest.Currency, opt => opt.MapFrom(src => src.Currency)).ReverseMap();

            CreateMap<Customer, CustomerRequestDTO>()
                .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address))
                .ForMember(dest => dest.Currency, opt => opt.MapFrom(src => src.Currency))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.Fullname, opt => opt.MapFrom(src => src.Fullname))
                .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Gender))
                .ForMember(dest => dest.Phone, opt => opt.MapFrom(src => src.Phone)).ReverseMap();

            CreateMap<Order, Order>()
                .ForMember(dest => dest.Code, opt => opt.MapFrom(src => src.Code))
                .ForMember(dest => dest.CreateDate, opt => opt.MapFrom(src => src.CreateDate))
                .ForMember(dest => dest.CustomerId, opt => opt.MapFrom(src => src.CustomerId))
                .ForMember(dest => dest.DeliveryDate, opt => opt.MapFrom(src => src.DeliveryDate))
                .ForMember(dest => dest.Deposit, opt => opt.MapFrom(src => src.Deposit))
                .ForMember(dest => dest.Note, opt => opt.MapFrom(src => src.Note))
                .ForMember(dest => dest.PaymentDate, opt => opt.MapFrom(src => src.PaymentDate))
                .ForMember(dest => dest.ShippingFee, opt => opt.MapFrom(src => src.ShippingFee))
                .ForMember(dest => dest.ShippingTypeId, opt => opt.MapFrom(src => src.ShippingTypeId))
                .ForMember(dest => dest.Surcharge, opt => opt.MapFrom(src => src.Surcharge))
                .ForMember(dest => dest.TotalPrice, opt => opt.MapFrom(src => src.TotalPrice))
                .ForMember(dest => dest.UpdateDate, opt => opt.MapFrom(src => src.UpdateDate))
                .ForMember(dest => dest.delFlag, opt => opt.MapFrom(src => src.delFlag)).ReverseMap();

            CreateMap<Package, PackageRequestDTO>()
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Price, opt => opt.MapFrom(src => src.Price))
                .ForMember(dest => dest.ThemeId, opt => opt.MapFrom(src => src.ThemeId))
                .ForMember(dest => dest.delFlag, opt => opt.MapFrom(src => src.delFlag)).ReverseMap();
        }
    }
}
