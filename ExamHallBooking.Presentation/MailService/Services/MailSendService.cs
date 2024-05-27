using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using MailSend_DotNETCore8WebAPI.Interfaces;
using MailSend_DotNETCore8WebAPI.Models;
using Microsoft.Extensions.Options;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace MailSend_DotNETCore8WebAPI.Services
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

            if (mailRequest.Attachments != null)
            {
                foreach (var file in mailRequest.Attachments)
                {
                    if (file.Length > 0)
                    {
                        using var ms = new MemoryStream();
                        await file.CopyToAsync(ms);
                        var fileBytes = ms.ToArray();
                        builder.Attachments.Add(file.FileName, fileBytes, ContentType.Parse(file.ContentType));
                    }
                }
            }

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