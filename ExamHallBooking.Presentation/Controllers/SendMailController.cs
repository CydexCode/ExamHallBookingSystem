using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ExamHallBooking.DataAccess.Interfaces;

using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using ExamHallBooking.DataAccess.Data.Models;

namespace ExamHallBooking.DataAccess.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SendMailController : ControllerBase
    {
        private readonly IMailSendService _mailService;
        private readonly ILogger<SendMailController> _logger;

        public SendMailController(IMailSendService mailService, ILogger<SendMailController> logger)
        {
            _mailService = mailService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> SendEmail([FromForm] MailSendRequest request)
        {
            try
            {
                if (request == null || string.IsNullOrEmpty(request.Body))
                {
                    _logger.LogError("Invalid mail request. The request or Body is null.");
                    return BadRequest("Invalid mail request. The Body is required.");
                }

                await _mailService.SendEmailAsync(request);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while sending email.");
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }
    }
}
