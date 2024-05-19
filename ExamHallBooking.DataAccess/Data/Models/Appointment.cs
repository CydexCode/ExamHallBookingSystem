using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExamHallBooking.DataAccess.Data.Models
{
    public class Appointment
    {
        [Key]
        public int ID { get; set; }

        [MaxLength(150), Column(TypeName = "nvarchar(150)")]
        public string ExamHall { get; set; } = "Lecture hall";

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string LectureName { get; set; } = "Lecture Name";

        public int NumOfStudent { get; set; } = 100;

        public int Year { get; set; } = 4;
        public int Semester { get; set; } = 7;

        public string Subject { get; set; } = "EC1020";

        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime ModifiedDate { get; set; } = DateTime.Now;

        public DateTime Date { get; set;} = DateTime.Now;

        [MaxLength(100), Column(TypeName = "nvarchar(100)")]
        public string AcademicStaff { get; set; } = "academicStaff";

        [MaxLength(10), Column(TypeName ="nvarchar(10)")]
        public string Time { get; set; } = "12:30";

        public string EndTime { get; set; } = "01:30";

        public bool Done { get; set; } = false;
        public bool Deleted { get; set; } = false;

        public byte LevelOfImportance { get; set; } = 2;
    }
}
