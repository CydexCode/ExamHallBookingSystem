/*using Xunit;
using Moq;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ExamHallBooking.Service.Services;
using ExamHallBooking.DataAccess.Data.Models;
using System.Threading.Tasks;
using MimeKit;
using System;
using MailKit.Net.Smtp;
using MailKit.Security;

namespace ExamHallBooking.Test.xUnit
{
    public class MailSendServiceTests
    {
        private readonly Mock<IOptions<MailSendSettings>> _mockMailSettings;
        private readonly Mock<ILogger<MailSendService>> _mockLogger;
        private readonly MailSendService _mailSendService;
        private readonly Mock<SmtpClient> _mockSmtpClient;

        public MailSendServiceTests()
        {
            _mockMailSettings = new Mock<IOptions<MailSendSettings>>();
            _mockLogger = new Mock<ILogger<MailSendService>>();
            _mockSmtpClient = new Mock<SmtpClient>();

            _mockMailSettings.Setup(x => x.Value).Returns(new MailSendSettings
            {
                Mail = "test@example.com",
                DisplayName = "Test",
                Password = "password",
                Host = "smtp.example.com",
                Port = 587
            });

            _mailSendService = new MailSendService(_mockMailSettings.Object, _mockLogger.Object);
        }

        [Fact]
        public async Task SendEmailAsync_ValidRequest_SendsEmail()
        {
            // Arrange
            var mailRequest = new MailSendRequest
            {
                ToEmail = "recipient@example.com",
                Subject = "Test Subject",
                Body = "Test Body"
            };

            _mockSmtpClient.Setup(x => x.ConnectAsync(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<SecureSocketOptions>(), default)).Returns(Task.CompletedTask);
            _mockSmtpClient.Setup(x => x.AuthenticateAsync(It.IsAny<string>(), It.IsAny<string>(), default)).Returns(Task.CompletedTask);
            _mockSmtpClient.Setup(x => x.DisconnectAsync(It.IsAny<bool>(), default)).Returns(Task.CompletedTask);

            // Act
            await _mailSendService.SendEmailAsync(mailRequest);

            // Assert
            _mockSmtpClient.Verify(x => x.ConnectAsync(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<SecureSocketOptions>(), default), Times.Once);
            _mockSmtpClient.Verify(x => x.AuthenticateAsync(It.IsAny<string>(), It.IsAny<string>(), default), Times.Once);
            _mockSmtpClient.Verify(x => x.SendAsync(It.IsAny<MimeMessage>(), default, default), Times.Once);
            _mockSmtpClient.Verify(x => x.DisconnectAsync(It.IsAny<bool>(), default), Times.Once);
        }

        [Fact]
        public async Task SendEmailAsync_SmtpException_LogsError()
        {
            // Arrange
            var mailRequest = new MailSendRequest
            {
                ToEmail = "recipient@example.com",
                Subject = "Test Subject",
                Body = "Test Body"
            };

           

            // Act & Assert
            var exception = await Assert.ThrowsAsync<SmtpCommandException>(() => _mailSendService.SendEmailAsync(mailRequest));
            _mockLogger.Verify(x => x.LogError(It.IsAny<Exception>(), "Failed to send email."), Times.Once);
        }
    }
}
*/