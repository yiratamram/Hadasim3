using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTO;
using BLL;
using DAL.models;

namespace HomeWorkHadasim3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VaccinationsController : ControllerBase
    {

        VaccinationsBLL _vaccinationsBLL = new VaccinationsBLL();


        //שליפת חיסונים לפי תעודת זהות
        [HttpGet("GetVaccinationById/{IdUser}")]
        public IActionResult GetVaccinationsById(int IdUser)
        {
            var currentVaccination = _vaccinationsBLL.GetVaccinationsById(IdUser);
            if (currentVaccination != null)
                return Ok(currentVaccination);
            return NotFound();
        }
        [HttpGet("GetLastVaccinationsById/{IdUser}")]
        public IActionResult GetLastVaccinationsById(int IdUser)
        {
            var currentVaccination = _vaccinationsBLL.GetLastVaccinationsById(IdUser);
            
                return Ok(currentVaccination);
        }
        //הוספת חיסונים

        [HttpPost("AddVaccination")]
        public IActionResult AddVaccination([FromBody] VaccinationsDTO vaccination)
        {
            var currentVaccination = _vaccinationsBLL.AddVaccination(vaccination);
            return Ok(currentVaccination);

        }

        //מעדכנת חיסון 

        [HttpPut("UpdateVaccination")]
        public IActionResult UpdateVaccination([FromBody] Vaccination v1)
        {
            var currentVaccination = _vaccinationsBLL.UpdateVaccination(v1);
            return Ok(currentVaccination);
        }

        ////מעדכנת תאריך החלמה 

        //[HttpPut("UpdateDateOfRecovery")]
        //public IActionResult UpdateDateOfRecovery([FromBody] string id, DateTime d)
        //{
        //    var currentVaccination = _vaccinationsBLL.UpdateDateOfRecovery(id, d);
        //    return Ok(currentVaccination);
        //}
        //כמות משתמשים שלא מחוסנים

        [HttpGet("GetCountNotV")]
        public IActionResult GetCountNotV()
        {
            return Ok(_vaccinationsBLL.GetCountNotV());
        }

        //כמות מחוסנים מחיסון מסויים
        [HttpGet("GetCountWhoVaccinated")]
        public IActionResult GetCountWhoVaccinated(int numberVaccination)
        {
            return Ok(_vaccinationsBLL.GetCountWhoVaccinated(numberVaccination));
        }

        [HttpGet("Rdate")]
        public IActionResult Rdate(int id)
        {
            return Ok(_vaccinationsBLL.RDate(id));
        }


        //גרף
        [HttpGet("PatientChart")]
        public IActionResult PatientChart()
        {
            var pos = _vaccinationsBLL.PatientChart();
            if (pos != null)
                return Ok(pos);
            return NotFound();
        }


        [HttpGet("AllTheVaccinations")]
        public IActionResult AllTheVaccinations()
        {
            var pnu = _vaccinationsBLL.AllTheVaccinations();
            if (pnu != null)
                return Ok(pnu);
            return NotFound();

        }
    }


   
}









