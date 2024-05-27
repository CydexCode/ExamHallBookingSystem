using Microsoft.AspNetCore.Http;

namespace ExamHallBooking.DataAccess.Data.Models
{
    public class MailSendRequest
    {
        public string ToEmail { get; set; }

        public string Subject { get; set; }

        public string Body { get; set; }
       
    }
}
