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

    public class VaccinationsBLL
    {
        VaccinationsDAL _VaccinationDAL = new VaccinationsDAL();
        IMapper imapper;

        public VaccinationsBLL()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapProfile>();
            });
            imapper = config.CreateMapper();
        }

        //שליפת חיסונים על ידי תעודת זהות
        public List<VaccinationsDTO> GetVaccinationsById(int idUser)
        {
            List<Vaccination> currentVaccination = _VaccinationDAL.GetVaccinationsById(idUser);
            List<VaccinationsDTO> _vaccinationDTO = imapper.Map<List<Vaccination>, List<VaccinationsDTO>>(currentVaccination);
            return _vaccinationDTO;
        }
        public int GetLastVaccinationsById(int idUser)
        {
            return _VaccinationDAL.GetLastVaccinationsById(idUser);

        }

        //הוספת חיסון
        public bool AddVaccination(VaccinationsDTO v1)
        {
            Vaccination currentVaccination = imapper.Map<VaccinationsDTO, Vaccination>(v1);
            return _VaccinationDAL.AddVaccination(currentVaccination);

        }
        //עדכון חיסון
        public Vaccination UpdateVaccination(Vaccination v1)
        {
            return _VaccinationDAL.UpdateVaccination(v1);
        }

        ////עדכון מועד החלמה
        //public Vaccination UpdateDateOfRecovery(string id,DateTime d)
        //{
        //    return _VaccinationDAL.UpdateDateOfRecovery(id, d);
        //}


        //כמות משתמשים שלא מחוסנים
        public int GetCountNotV()
        {
            return _VaccinationDAL.GetCountNotV();
        }

        //כמות מחוסנים מחיסון מסויים
        public int GetCountWhoVaccinated(int n)
        {
            return _VaccinationDAL.GetCountWhoVaccinated(n);
        }

        
        //גרף
        public List<int> PatientChart()
        {
            return _VaccinationDAL.PatientChart();
        }


        public List<int> AllTheVaccinations()
        {
            return _VaccinationDAL.AllTheVaccinations();
        }
        public DateTime? RDate(int id)
        {
            return _VaccinationDAL.RDate(id);
        }
        
    }
}
