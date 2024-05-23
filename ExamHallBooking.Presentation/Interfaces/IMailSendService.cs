using ExamHallBooking.DataAccess.Data.Models;


namespace ExamHallBooking.DataAccess.Interfaces
{
    public interface IMailSendService
    {
        public Task SendEmailAsync(MailSendRequest mailrequest);
    }
}
