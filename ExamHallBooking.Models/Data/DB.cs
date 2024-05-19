using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace ExamHallBooking.Models.Data
{
    public class DB
    {
        public static int Insert(IConfiguration _configuration, Users user)
        {
            int output = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString(Global.myconstring).ToString()))
                {

                    SqlCommand cmd = new SqlCommand("sp_Insert", connection);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@ID", user.Id);
                    cmd.Parameters.AddWithValue("@NAME", user.Name);
                    cmd.Parameters.AddWithValue("@LOGIN_NAME", user.LoginName);
                    cmd.Parameters.AddWithValue("@PASSWORD", user.Password);
                    cmd.Parameters.AddWithValue("@MOBILE", user.Mobile);
                    connection.Open();
                    cmd.ExecuteNonQuery();
                    connection.Close();
                    output = 1;
                }
            }
            catch (Exception ex)
            {

            }
            return output;
        }
        public static int Update(IConfiguration _configuration, Users user)
        {
            int output = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString(Global.myconstring).ToString()))
                {

                    SqlCommand cmd = new SqlCommand("sp_Update", connection);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@ID", user.Id);
                    cmd.Parameters.AddWithValue("@NAME", user.Name);
                    cmd.Parameters.AddWithValue("@LOGIN_NAME", user.LoginName);
                    cmd.Parameters.AddWithValue("@PASSWORD", user.Password);
                    cmd.Parameters.AddWithValue("@MOBILE", user.Mobile);
                    connection.Open();
                    cmd.ExecuteNonQuery();
                    connection.Close();
                    output = 1;
                }
            }
            catch (Exception ex)
            {

            }
            return output;
        }
        public static int DeleteUser(IConfiguration _configuration, int id)
        {
            int output = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString(Global.myconstring).ToString()))
                {

                    SqlCommand cmd = new SqlCommand("sp_deleteUser", connection);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@ID", id);
                    connection.Open();
                    cmd.ExecuteNonQuery();
                    connection.Close();
                    output = 1;
                }
            }
            catch (Exception ex)
            {

            }
            return output;
        }
        public static DataTable LoginDetails(IConfiguration _configuration, Login login)
        {
            DataTable ldt = new DataTable();
            try
            {
                using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString(Global.myconstring).ToString()))
                {
                    SqlDataAdapter adapter1 = new SqlDataAdapter("GetLoginDetails", con);
                    adapter1.SelectCommand.CommandType = CommandType.StoredProcedure;
                    adapter1.SelectCommand.Parameters.AddWithValue("@loginName", login.LoginName);
                    adapter1.SelectCommand.Parameters.AddWithValue("@password", login.Password);

                    adapter1.Fill(ldt);

                }
            }
            catch (Exception ex)
            {
                return null;
            }
            return ldt;
        }
        public static DataTable UserDetails(IConfiguration _configuration)
        {
            DataTable ldt = new DataTable();
            try
            {
                using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString(Global.myconstring).ToString()))
                {
                    SqlDataAdapter adapter1 = new SqlDataAdapter("sp_GetUserDetails", con);
                    adapter1.SelectCommand.CommandType = CommandType.StoredProcedure;
                    adapter1.Fill(ldt);

                }
            }
            catch (Exception ex)
            {
                return null;
            }
            return ldt;
        }
    }
}
