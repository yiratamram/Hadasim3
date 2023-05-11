using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTO;
using BLL;
using DAL.models;
using System.Xml;
using System.Xml.Linq;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Http;




namespace HomeWorkHadasim3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        UsersBLL _usersBLL = new UsersBLL();


        //שליפת כל המשתמשים
        [HttpGet("GetAllUsers")]
        public IActionResult GetAllUsers()
        {

            var user = _usersBLL.GetAllUsers();

            if (user != null)
                return Ok(user);
            return NotFound();

        }
        [HttpGet("ReadMenegerPassword")]
        public IActionResult ReadMenegerPassword()
        {
            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.Load("D:\\Programing\\HadasimProject\\HomeWorkHadasim3\\HomeWorkHadasim3\\wwwroot\\Password.xml");

            return Ok(xmlDoc.InnerText);
        }

        //שליפת משתמש לפי תעודת זהות
        [HttpGet("GetUserById/{IdUser}")]
        public IActionResult GetUserById(int IdUser)
        {
            var currentUser = _usersBLL.GetUserById(IdUser);
            //  if (currentUser != null)
            return Ok(currentUser);
            //return NotFound();
        }

        //הוספת משתמש
        [HttpPost("AddUser")]
        public IActionResult AddUser([FromBody] UsersDTO user)
        {
            var currentUser = _usersBLL.AddUser(user);
            return Ok(currentUser);

        }

        //עדכון משתמש

        [HttpPut("UpdateUser")]
        public IActionResult UpdateUser([FromBody] User u1)
        {
            var currentUser = _usersBLL.UpdateUser(u1);
            return Ok(currentUser);
        }


        [HttpGet("IfSick")]
        public IActionResult IfSick(int id)
        {
            return Ok(_usersBLL.IfSick(id));
        }


        [HttpPut("UpdateImage/{id}/{img}")]
        public IActionResult UpdateImage(int id, string img)
        {
            _usersBLL.UpdateImage(id, img);
            return Ok();
        }

        [HttpPost("Upload")]
        public async Task<IActionResult> Upload()
        {
            try
            {
                var file = Request.Form.Files[0];

                if (file == null || file.Length == 0)
                {
                    return BadRequest("No file selected");
                }

                if (!IsImageFile(file))
                {
                    return BadRequest("File is not an image");
                }

                var fileName = file.FileName;
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images", fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        private bool IsImageFile(IFormFile file)
        {
            if (file.ContentType.ToLower() != "image/jpg"
                && file.ContentType.ToLower() != "image/jpeg"
                && file.ContentType.ToLower() != "image/pjpeg"
                && file.ContentType.ToLower() != "image/gif"
                && file.ContentType.ToLower() != "image/x-png"
                && file.ContentType.ToLower() != "image/png")
            {
                return false;
            }

            var extension = Path.GetExtension(file.FileName).ToLower();
            if (extension != ".jpg" && extension != ".png" && extension != ".gif" && extension != ".jpeg")
            {
                return false;
            }

            return true;
        }
    }
}











