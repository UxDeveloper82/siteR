using System.Linq;
using AutoMapper;
using Backend.Dtos;
using Backend.Models;
using sideR.Dtos;
using sideR.Models;

namespace Backend.Helpers
{
        public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<Port, PortForListDto>()
                 .ForMember(m => m.PhotoUrl , opt => {
                     opt.MapFrom(src => src.PortPhotos.FirstOrDefault(p => p.IsMain).Url);
                 });
            CreateMap<Port, PortForDetailedDto>()
               .ForMember(dest => dest.PhotoUrl, opt => {
                   opt.MapFrom(src => src.PortPhotos.FirstOrDefault(p => p.IsMain).Url);
               });
            CreateMap<PortPhoto, PortPhotosForDetailedDto>();
            CreateMap<PortForUpdateDto, Port>();
            CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<PhotoForCreationDto, Photo>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<UserForRegisterDto, User>();
        }
    }
}