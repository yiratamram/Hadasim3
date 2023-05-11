using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DTO
{
    public class UsersDTO
    {
        public int IdUser { get; set; }
        public string PrivateName { get; set; }
        public string FamilyName { get; set; }
        public string CityAdress { get; set; }
        public string StreetAdress { get; set; }
        public int NumberAdress { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Phone { get; set; }
        public string MobilePhone { get; set; }
        public string ImageProfile { get; set; }
        public DateTime DateOfPositiveResult { get; set; }
        public DateTime DateOfRecovery { get; set; }
    }
}





