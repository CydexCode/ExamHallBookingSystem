namespace AppointmentsManager.Data.Models
{
    public class Response
    {
        public int StatusCode { get; set; }
        public string StatusMessage { get; set; }
        public List<Users> lstUsers { get; set; }
    }
}
