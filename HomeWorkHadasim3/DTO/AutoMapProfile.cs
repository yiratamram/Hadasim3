using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using DAL.models;

namespace DTO
{
  public class AutoMapProfile : AutoMapper.Profile
    {
        public AutoMapProfile()
        {
            CreateMap<User, UsersDTO>();
            CreateMap<UsersDTO, User>();
            CreateMap<Vaccination, VaccinationsDTO>();
            CreateMap<VaccinationsDTO, Vaccination>();
            CreateMap<List<UsersDTO>, List<User>>();
            CreateMap<List<VaccinationsDTO>, List<Vaccination>>();

        }
    }
}
