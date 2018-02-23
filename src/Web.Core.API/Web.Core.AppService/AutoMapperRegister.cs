using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using Web.Core.AppService.Domain;
using Web.Core.AppService.Models;

namespace Web.Core.AppService
{
    public class AutoMapperRegister: Profile
    {
        public AutoMapperRegister()
        {
            // Add as many of these lines as you need to map your objects
            //CreateMap<User, UserDto>().ReverseMap();
            CreateMap<Account, User>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.CompanyId, opt => opt.MapFrom(src => src.CompanyId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Login, opt => opt.MapFrom(src => src.Login))
                .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password))
                .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address))
                .ForMember(dest => dest.IsActive, opt => opt.MapFrom(src => src.IsActive))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.Phone, opt => opt.MapFrom(src => src.Phone)).ReverseMap();
        }
    }
}
