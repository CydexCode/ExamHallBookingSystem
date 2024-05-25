using MailSend_DotNETCore8WebAPI.Models;

namespace MailSend_DotNETCore8WebAPI.Interfaces
{
    public interface IMailSendService
    {
        public Task SendEmailAsync(MailSendRequest mailrequest);
    }
}
