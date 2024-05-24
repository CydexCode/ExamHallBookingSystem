using ExamHallBooking.DataAccess.Data.Models;


namespace ExamHallBooking.Service.Interfaces
{
    public interface IMailSendService
    {
        public Task SendEmailAsync(MailSendRequest mailrequest);
    }
}
