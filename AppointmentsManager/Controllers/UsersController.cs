using AppointmentsManager.Data.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppointmentsManager.Data;
using AppointmentsManager.Data.Models;

namespace AppointmentsManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        public readonly IConfiguration _configuration;
        public UsersController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [Route("AddUsers")]
        [HttpPost]
        public Response Insert(Users user)
        {
            Response response = new Response();


            int iResult = 0;
            try
            {
                iResult = DB.Insert(_configuration, user);

                if (iResult > 0)
                {

                    response.StatusCode = 200;
                    response.StatusMessage = "Success";
                    //response.lstUsers = userList;

                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Failed";
                    //response.lstUsers = null;


                }
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.StatusMessage = "Internal Server Error";
                //response.lstUsers = null;
            }
            return response;


        }
        [Route("UpdateUsers")]
        [HttpPut]
        public Response Update(Users user)
        {
            Response response = new Response();


            int iResult = 0;
            try
            {
                iResult = DB.Update(_configuration, user);

                if (iResult > 0)
                {
                    //userList.Add(user);
                    response.StatusCode = 200;
                    response.StatusMessage = "Success";
                    //response.lstUsers = userList;

                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Failed";
                    //response.lstUsers = null;


                }
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.StatusMessage = "Internal Server Error";
                //response.lstUsers = null;
            }
            return response;


        }
        [Route("DeleteUsers/{id}")]
        [HttpDelete]
        public Response Delete(int id)
        {
            Response response = new Response();


            int iResult = 0;
            try
            {
                iResult = DB.DeleteUser(_configuration, id);

                if (iResult > 0)
                {

                    response.StatusCode = 200;
                    response.StatusMessage = "Success";


                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Failed";


                }
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.StatusMessage = "Internal Server Error";
            }
            return response;


        }

     
        [Route("GetLogin")]
        [HttpPost]
        public List<Users> LoginDetails(Login login)
        {
            Users user = new Users();
            DataTable ldt = new DataTable();
            ldt = DB.LoginDetails(_configuration, login);
            List<Users> usersList = new List<Users>();
            if (ldt.Rows.Count > 0)
            {
                usersList = (from DataRow dr in ldt.Rows
                             select new Users()
                             {
                                 Id = Convert.ToInt32(dr["Id"]),
                                 Name = dr["NAME"].ToString(),
                                 LoginName = dr["LOGIN_NAME"].ToString(),
                                 Password = dr["PASSWORD"].ToString(),
                                 Mobile = dr["MOBILE"].ToString(),
                                 Status = "Success",

                             }).ToList();

            }
            else
            {

                user.Status = "Failed";
                usersList.Add(user);
            }
            return usersList;
        }

        [Route("GetLogin")]
        [HttpGet]
        public List<Users> LoginDetails2(Login login)
        {
            Users user = new Users();
            DataTable ldt = new DataTable();
            ldt = DB.LoginDetails(_configuration, login);
            List<Users> usersList = new List<Users>();
            if (ldt.Rows.Count > 0)
            {
                usersList = (from DataRow dr in ldt.Rows
                             select new Users()
                             {
                                 Id = Convert.ToInt32(dr["Id"]),
                                 Name = dr["NAME"].ToString(),
                                 LoginName = dr["LOGIN_NAME"].ToString(),
                                 Password = dr["PASSWORD"].ToString(),
                                 Mobile = dr["MOBILE"].ToString(),
                                 Status = "Success",

                             }).ToList();

            }
            else
            {

                user.Status = "Failed";
                usersList.Add(user);
            }
            return usersList;
        }


        [HttpGet]
        [Route("GetUsers")]
        public List<Users> GetUsers()
        {
            Users user = new Users();
            DataTable ldt = new DataTable();
            ldt = DB.UserDetails(_configuration);
            List<Users> usersList = new List<Users>();
            if (ldt.Rows.Count > 0)
            {
                usersList = (from DataRow dr in ldt.Rows
                             select new Users()
                             {
                                 Id = Convert.ToInt32(dr["Id"]),
                                 Name = dr["NAME"].ToString(),
                                 LoginName = dr["LOGIN_NAME"].ToString(),
                                 Password = dr["PASSWORD"].ToString(),
                                 Mobile = dr["MOBILE"].ToString(),
                                 Status = "Success",

                             }).ToList();
            }
            else
            {

                user.Status = "Failed";
                usersList.Add(user);
            }
            return usersList;
        }
    }
}
