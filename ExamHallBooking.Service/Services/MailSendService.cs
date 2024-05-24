using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

using Microsoft.Extensions.Options;


using ExamHallBooking.Service.Interfaces;
using Microsoft.Extensions.Logging;
using ExamHallBooking.DataAccess.Data.Models;

namespace ExamHallBooking.Service.Services
{
    public class MailSendService : IMailSendService
    {
        private readonly MailSendSettings _mailSettings;
        private readonly ILogger<MailSendService> _logger;

        public MailSendService(IOptions<MailSendSettings> mailSettings, ILogger<MailSendService> logger)
        {
            _mailSettings = mailSettings.Value;
            _logger = logger;
        }

        public async Task SendEmailAsync(MailSendRequest mailRequest)
        {
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
            email.To.Add(MailboxAddress.Parse(mailRequest.ToEmail));
            email.Subject = mailRequest.Subject;

            var builder = new BodyBuilder
            {
                HtmlBody = mailRequest.Body ?? string.Empty  // Ensure Body is not null
            };

         
            email.Body = builder.ToMessageBody();

            using var smtp = new SmtpClient();
            try
            {
                smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
                smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
                await smtp.SendAsync(email);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to send email.");
                throw; // rethrow the exception to be handled by the controller
            }
            finally
            {
                smtp.Disconnect(true);
            }
        }
    }


}