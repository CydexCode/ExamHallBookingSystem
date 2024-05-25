namespace MailSend_DotNETCore8WebAPI.Models
{
    public class MailSendRequest
    {
        public string ToEmail { get; set; }

        public string Subject { get; set; }

        public string Body { get; set; }
        public List<IFormFile> Attachments { get;  set; }
    }
}
