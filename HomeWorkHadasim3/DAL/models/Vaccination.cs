using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.models
{
    public partial class Vaccination
    {
        public string IdVaccination { get; set; }
        public int? IdUser { get; set; }
        public DateTime? DateOfVaccination { get; set; }
        public string Manufacturer { get; set; }
       
        public int NumVaccination { get; set; }
        public virtual User IdUserNavigation { get; set; }

        public Vaccination(int IdUser, DateTime DateOfVaccination, string Manufacturer,  User IdUserNavigation,int NumVaccination)
        {
            this.IdUser = IdUser;
            this.DateOfVaccination = DateOfVaccination;
            this.Manufacturer = Manufacturer;
            this.IdUserNavigation = IdUserNavigation;
            this.NumVaccination = NumVaccination;

        }
        public Vaccination() { }
    }
}






