using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DAL.models;
namespace DAL
{
    public class UsersDAL
    {
        DBContext db = new DBContext();
        public UsersDAL()
        {
        }

        //שליפת כל המשתמשים
        public List<User> GetAllUsers()
        {

            List<User> currentUsers = db.Users.ToList();
            return currentUsers;
        }

        //שליפת משתמש לפי תעודת זהות
        public User GetUserById(int idUser)
        {
            User currentUser = db.Users.Where(x => x.IdUser == idUser).FirstOrDefault();
            return currentUser;
        }

        //הוספת משתמש 
        public bool AddUser(User user)
        {

            try
            {

                db.Users.Add(user);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        // עידכון משתמש
        public User UpdateUser(User u1)
        {
            User currentUser = db.Users.Where(x => x.IdUser == u1.IdUser).FirstOrDefault();
            if (currentUser != null)
            {
                currentUser.IdUser = u1.IdUser;
                currentUser.PrivateName = u1.PrivateName;
                currentUser.FamilyName = u1.FamilyName;
                currentUser.CityAdress = u1.CityAdress;
                currentUser.StreetAdress = u1.StreetAdress;
                currentUser.NumberAdress = u1.NumberAdress;
                currentUser.DateOfBirth = u1.DateOfBirth;
                currentUser.Phone = u1.Phone;
                currentUser.MobilePhone = u1.MobilePhone;
                currentUser.ImageProfile = u1.ImageProfile;
                if(u1.DateOfPositiveResult!=null)
                currentUser.DateOfPositiveResult = u1.DateOfPositiveResult;
                if (u1.DateOfRecovery != null)
                    currentUser.DateOfRecovery = u1.DateOfRecovery;

                db.SaveChanges();
            }
            return currentUser;
        }
        public int IfSick(int id)
        {
            int count = 0;
            List<User> Lv = db.Users.Where(x => x.IdUser == id).ToList();
            foreach (var item in Lv)
            {
                if (item.DateOfPositiveResult != null&& item.DateOfPositiveResult.Value.Year!=0001)
                    count++;
               
                if (item.DateOfRecovery != null&& item.DateOfRecovery.Value.Year != 0001)
                    count++;

            }
            return count;
        }
        public void UpdateImage(int id, string img)
        {
            try
            {
                db.Users.FirstOrDefault(x => x.IdUser.Equals(id)).ImageProfile = img;
                db.SaveChanges();
            }
            catch
            {
                throw;

            }
        }



    }
}









   