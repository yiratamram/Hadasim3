using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DAL.models;
namespace DAL
{
    public class VaccinationsDAL
    {
        DBContext db = new DBContext();
        public VaccinationsDAL()
        {
        }

        //שליפת חיסונים לפי תעודת זהות
        public List<Vaccination> GetVaccinationsById(int idUser)
        {
            List<Vaccination> currentVaccinations = db.Vaccinations.Where(x => x.IdUser == idUser).ToList();
            return currentVaccinations;
        }

        public int GetLastVaccinationsById(int idUser)
        {
           List< Vaccination> vByUser = db.Vaccinations.Where(x => x.IdUser == idUser).ToList();
          

            return vByUser.Count;
        }

        //הוספת חיסון 
        public bool AddVaccination(Vaccination vaccination)
        {
            try
            {
              
                List<Vaccination> v = db.Vaccinations.Where(x => x.IdUser == vaccination.IdUser).ToList();
                int currentVaccinations = 0;
                if (v.Count != 0)
                {
                    currentVaccinations = v[v.Count - 1].NumVaccination;
                }
                vaccination.NumVaccination = currentVaccinations + 1;
                vaccination.IdVaccination = Convert.ToString(vaccination.IdUser) + vaccination.NumVaccination;
                db.Vaccinations.Add(vaccination);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        //עידכון חיסון 
        public Vaccination UpdateVaccination(Vaccination v1)
        {
            Vaccination currentVaccination = db.Vaccinations.Where(x => x.IdVaccination.Equals(v1.IdVaccination)).FirstOrDefault();
            if (currentVaccination != null)
            {

                currentVaccination.IdUser = v1.IdUser;
                currentVaccination.DateOfVaccination = v1.DateOfVaccination;
                currentVaccination.Manufacturer = v1.Manufacturer;
               
                currentVaccination.NumVaccination = v1.NumVaccination;

                db.SaveChanges();
            }
            return currentVaccination;
        }

        ////עדכון מועד החלמה
        //public Vaccination UpdateDateOfRecovery(string IdVaccination, DateTime v1)
        //{
        //    Vaccination currentVaccination = db.Vaccinations.Where(x => x.IdVaccination.Equals(IdVaccination)).FirstOrDefault();
        //    if (currentVaccination != null)
        //    {
        //        currentVaccination.DateOfRecovery = v1;
        //        db.SaveChanges();
        //    }
        //    return currentVaccination;
        //}



        //כמות משתמשים שלא מחוסנים
        public int GetCountNotV()
        {
            int count = 0;
            foreach (var item in db.Users.ToList())
            {
                List<Vaccination> Lv = db.Vaccinations.Where(x => x.IdUser == item.IdUser).ToList();
                if (Lv.Count == 0)
                {
                    count++;
                }
            }
            return count;
        }
        //גרף לכל החיסונים
        public List<int> PatientChart()
        {
            List<int> patient = new List<int>();
            //עובר על כל הימים בחודש
            for (int i = 1; i < 32; i++)
            {
                int Avgpos = 0;
                //מחפש את כל החולים בחודש האחרון ביום i
                List<User> arr = db.Users.Where(x => x.DateOfPositiveResult.Value.Month == DateTime.Today.Month && x.DateOfPositiveResult.Value.Year == DateTime.Today.Year && x.DateOfPositiveResult.Value.Day == i).ToList();
                foreach (var p in arr)
                {
                    if (arr != null)
                    {

                        if (p.DateOfPositiveResult != null && p.DateOfRecovery.Value.Year== 0001)
                        {
                            Avgpos++;
                        }

                    }

                }
                //סוכם מספר חולים באותו היום
                patient.Add(Avgpos);
                //הרשימה שחוזרת לפי ימים
                //לכל היותר בגודל 31 כמספר הימים

            }
            return patient;
        }

        //כמות מחוסנים מחיסון מסויים
        public int GetCountWhoVaccinated(int numerVaccination)
        {
            int count = 0;
            foreach (var item in db.Users.ToList())
            {
                List<Vaccination> Lv = db.Vaccinations.Where(x => x.IdUser == item.IdUser).ToList();
                if (Lv.Count != 0)
                {
                    foreach (var item1 in Lv)
                    { 
                        if(item1.NumVaccination==numerVaccination)
                            count++;
                    }
                        
                }
            }
            return count;
        }
        public DateTime? RDate(int id)
        {
            List<Vaccination> v = db.Vaccinations.Where(x => x.IdUser == id).ToList();
            if (v.Count!=0)
            {
                Vaccination lv = v.LastOrDefault();
                return lv.DateOfVaccination;
            }
            return null;
            }





        public List<int> AllTheVaccinations()
        {
            List<int> c = new List<int>();
            c.Add(GetCountWhoVaccinated(1));
            c.Add(GetCountWhoVaccinated(2));
            c.Add(GetCountWhoVaccinated(3));
            c.Add(GetCountWhoVaccinated(4));
            return c;
        }

       

        }
    }

  



    


   

