using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DAL;
using DTO;
using DAL.models;
using AutoMapper;


namespace BLL
{
    public class UsersBLL
    {
        UsersDAL _UsersDAL = new UsersDAL();
        IMapper imapper;

        public UsersBLL()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapProfile>();
            });
            imapper = config.CreateMapper();
        }

        //שליפת כל המשתמשים
        public List<UsersDTO> GetAllUsers()
        {
            List<User> currentUsers = _UsersDAL.GetAllUsers();
            List<UsersDTO> _UsersDTO = imapper.Map<List<User>, List<UsersDTO>>(currentUsers);
            return _UsersDTO;

        }


        //שליפת  משתמש על ידי תעודת זהות
        public UsersDTO GetUserById(int idUser)
        {
            User currentUser = _UsersDAL.GetUserById(idUser);
            UsersDTO _userDTO = imapper.Map<User, UsersDTO>(currentUser);
            return _userDTO;
        }

      //הוספת משתמש
        public bool AddUser(UsersDTO u1)
        {
            User currentUser = imapper.Map<UsersDTO, User>(u1);
            return _UsersDAL.AddUser(currentUser);
          
        }
        //עדכון משתמש
        public User UpdateUser(User u1)
        {
            return _UsersDAL.UpdateUser(u1);
        }
        public int IfSick(int id)
        {
            return _UsersDAL.IfSick(id);
        }
        public void UpdateImage(int id, string img)
        {
           _UsersDAL.UpdateImage(id, img);
        }


    }
}




    
  