using System;
using System.Collections.Generic;


#nullable disable

namespace DAL.models
{
    public partial class User
    {
        public User()
        {
            Vaccinations = new HashSet<Vaccination>();
        }
     
        public int IdUser { get; set; }
        public string PrivateName { get; set; }
        public string FamilyName { get; set; }
        public string CityAdress { get; set; }
        public string StreetAdress { get; set; }
        public int NumberAdress { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string Phone { get; set; }
        public string MobilePhone { get; set; }
        public string ImageProfile { get; set; }
        public DateTime? DateOfPositiveResult { get; set; }
        public DateTime? DateOfRecovery { get; set; }
        public virtual ICollection<Vaccination> Vaccinations { get; set; }
        
    }
}
