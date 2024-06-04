/*using ExamHallBooking.DataAccess.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Exchange.WebServices.Data;
using System.Diagnostics;
using CalendarView = Microsoft.Exchange.WebServices.Data.CalendarView;
namespace ExamHallBooking.Presentation.Controllers
{
    public class addAppintmentController : Controller
    {
        public ActionResult GetAppointments()
        {
            string ewsUrl = "https://outlook.office365.com/EWS/Exchange.asmx";
            string userName = "youroutlookmail";
            string password = "youroutlookpassword";

            ExchangeService service = new ExchangeService();
            service.Url = new Uri(ewsUrl);
            service.UseDefaultCredentials = false;
            service.Credentials = new WebCredentials(userName, password);

            DateTime startDate = DateTime.Now;
            DateTime endDate = startDate.AddDays(30);

            const int NUM_APPTS = 5;

            // Initialize the calendar folder object with only the folder ID.
            CalendarFolder calendar = CalendarFolder.Bind(Servicex, WellKnownFolderName.Calendar, new PropertySet());

            CalendarView cView = new CalendarView(startDate, endDate, NUM_APPTS);

            cView.PropertySet = new PropertySet(AppointmentSchema.Subject, AppointmentSchema.Start, AppointmentSchema.End);

            FindItemsResults<Appointment> appointments = calendar.FindAppointments(cView);

            Debug.WriteLine("\nThe first" + NUM_APPTS + "appointments on your calendar from" + startDate.Date.ToShortDateString() + "to" + endDate.Date.ToShortDateString() + "are:\n");

            foreach (Appointment a in appointments)
            {
                Debug.Write("Subject: " + a.Subject.ToString() + "; ");
                Debug.Write("Start: " + a.Start.ToString() + "; ");
                Debug.Write("End: " + a.End.ToString() + "; ");

                clsAppointment app = new clsAppointment();
                app.Subject = a.Subject;
                app.StartDate = a.Start;
                app.EndDate = a.End;
            }

            return View();

        }



        public ActionResult AddAppointments()
        {
            string ewsUrl = "https://outlook.office365.com/EWS/Exchange.asmx";
            string userName = "youremail@yourdomain.com";
            string password = "youroutlookpassword";

            ExchangeService service = new ExchangeService(ExchangeVersion.Exchange2013);
            service.Url = new Uri(ewsUrl);
            service.Credentials = new WebCredentials(userName, password);
            service.UseDefaultCredentials = false;

            Appointment appointment = new Appointment(service);
            appointment.Subject = "Tennis Match";
            appointment.Body = "Focus on backhand this week.";
            appointment.Start = DateTime.Now.AddDays(2);
            appointment.End = DateTime.Now.AddDays(2).AddHours(1);
            appointment.Location = "Community Club";
            appointment.RequiredAttendees.Add("dennis@domain.com");
            appointment.ReminderMinutesBeforeStart = 60;

            // Save the appointment to your calendar.
            appointment.Save(SendInvitationsMode.SendToNone);

            return View();
        }

    }
}
*/