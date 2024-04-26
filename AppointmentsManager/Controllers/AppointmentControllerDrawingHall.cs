using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppointmentsManager.Data;
using AppointmentsManager.Data.Models;

namespace AppointmentsManager.Controllers
{
    [Route("api/appointmentDrawingHall")]
    [ApiController]
    public class AppointmentControllerDrawingHall : ControllerBase
    {
        private readonly AppDbContext _context;

        public AppointmentControllerDrawingHall(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/appointment - default
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppointmentDrawingHall>>> GetAppointmentsDrawingHall()
        {
          if (_context.AppointmentsDrawingHall == null)
          {
              return NotFound("No Data Found!");
          }
            return await _context.AppointmentsDrawingHall.Where(e=> !e.Deleted && !e.Done).ToListAsync();
        }

        // GET: api/appointment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AppointmentDrawingHall>> GetAppointmentDrawingHall(int id)
        {
          if (_context.AppointmentsDrawingHall == null)
          {
              return NotFound("No Data Found!");
          }
            var appointmentDrawingHall = await _context.AppointmentsDrawingHall.FindAsync(id);

            if (appointmentDrawingHall == null)
            {
                return NotFound("No Data Found!");
            }

            return appointmentDrawingHall;
        }

        // POST: api/appointment/filters
        [HttpPost("filtersDrawingHall")]
        public async Task<ActionResult<IEnumerable<AppointmentDrawingHall>>> FilteredAppointmentsDrawingHall(FilterDrawingHall filtersDrawingHall)
        {
            if (_context.AppointmentsDrawingHall == null)
            {
                return NotFound("No Data Found!");
            }

            List<AppointmentDrawingHall> allData = await _context.AppointmentsDrawingHall.ToListAsync();

            if (filtersDrawingHall.All)
            {
                return allData;
            }

            if(filtersDrawingHall.LevelOfImportance != null)
            {
                allData = allData.Where(e=> e.LevelOfImportance == filtersDrawingHall.LevelOfImportance).ToList();
            }

            if (filtersDrawingHall.SpecifiedDate != null)
            {
                allData = allData.Where(e => e.Date == filtersDrawingHall.SpecifiedDate).ToList();
            }

            if (filtersDrawingHall.StartDate != null && filtersDrawingHall.EndDate != null)
            {
                allData = allData.Where(e => e.Date >= filtersDrawingHall.StartDate && e.Date <= filtersDrawingHall.EndDate).ToList();
            }

            if (filtersDrawingHall.SpecifiedTime != null)
            {
                allData = allData.Where(e => e.Time == filtersDrawingHall.SpecifiedTime).ToList();
            }

            allData = allData.Where(e => e.Done == filtersDrawingHall.Done).ToList();
            allData = allData.Where(e => e.Deleted == filtersDrawingHall.Deleted).ToList();

            return allData;
        }

        // PUT: api/appointment/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppointmentDrawingHall(int id, AppointmentDrawingHall appointmentDrawingHall)
        {
            if (id != appointmentDrawingHall.ID)
            {
                return BadRequest("You are trying to modify the wrong appointment.");
            }

          //  _context.Entry(appointment).State = EntityState.Modified;

            try{

                AppointmentDrawingHall entry_ = await _context.AppointmentsDrawingHall.FirstAsync(e=> e.ID == appointmentDrawingHall.ID);

                if(entry_.ExamHall != appointmentDrawingHall.ExamHall)
                {
                    entry_.ExamHall = appointmentDrawingHall.ExamHall;
                }

                if (entry_.LectureName != appointmentDrawingHall.LectureName)
                {
                    entry_.LectureName = appointmentDrawingHall.LectureName;
                }

                if (entry_.AcademicStaff != appointmentDrawingHall.AcademicStaff)
                {
                    entry_.AcademicStaff = appointmentDrawingHall.AcademicStaff;
                }

                if (entry_.NumOfStudent != appointmentDrawingHall.NumOfStudent)
                {
                    entry_.NumOfStudent = appointmentDrawingHall.NumOfStudent;
                }
                if (entry_.Year != appointmentDrawingHall.Year)
                {
                    entry_.Year = appointmentDrawingHall.Year;
                }
                if (entry_.Semester != appointmentDrawingHall.Semester)
                {
                    entry_.Semester = appointmentDrawingHall.Semester;
                }
                if (entry_.Subject != appointmentDrawingHall.Subject)
                {
                    entry_.Subject = appointmentDrawingHall.Subject;
                }
                if (entry_.LevelOfImportance != appointmentDrawingHall.LevelOfImportance)
                {
                    entry_.LevelOfImportance = appointmentDrawingHall.LevelOfImportance;
                }

                if (entry_.Done != appointmentDrawingHall.Done)
                {
                    entry_.Done = appointmentDrawingHall.Done;
                }

                if (entry_.Deleted != appointmentDrawingHall.Deleted)
                {
                    entry_.Deleted = appointmentDrawingHall.Deleted;
                }

                if (entry_.Date != appointmentDrawingHall.Date)
                {
                    entry_.Date = appointmentDrawingHall.Date;
                }

                if (entry_.Time != appointmentDrawingHall.Time)
                {
                    entry_.Time = appointmentDrawingHall.Time;
                }
                if (entry_.EndTime != appointmentDrawingHall.EndTime)
                {
                    entry_.EndTime = appointmentDrawingHall.EndTime;
                }

                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppointmentExistsDrawingHall(id))
                {
                    return NotFound("The appointment with the Id" + " " + id + " does not exist!");
                }
                else
                {
                    throw;
                }
            }

            return Ok("Appointment updated successfully!");
        }

        // POST: api/appointment
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AppointmentDrawingHall>> PostAppointmentDrawingHall(AppointmentDrawingHall appointmentDrawingHall)
        {
          if (_context.AppointmentsDrawingHall == null)
          {
              return Problem("Entity set 'Appointments'  is null.");
          }
            
          try
            {
                _context.AppointmentsDrawingHall.Add(appointmentDrawingHall);
                await _context.SaveChangesAsync();
            } catch (DbUpdateConcurrencyException e)
            {
                return BadRequest("Could not create the new Appointment: " + e.Message);
            }

            return CreatedAtAction("GetAppointment", new { id = appointmentDrawingHall.ID }, appointmentDrawingHall);
        }

        // DELETE: api/appointment/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppointmentDrawingHall(int id)
        {
            if (_context.AppointmentsDrawingHall == null)
            {
                return NotFound("No Data Found!");
            }
            AppointmentDrawingHall appointmentDrawingHall = await _context.AppointmentsDrawingHall.FirstAsync(e=> e.ID == id);
            if (appointmentDrawingHall == null)
            {
                return NotFound("No appointment with the ID " + id );
            }

            AppointmentDrawingHall entry_ = await _context.AppointmentsDrawingHall.FirstAsync(e => e.ID == appointmentDrawingHall.ID);
            entry_.ModifiedDate = DateTime.Now;
            entry_.Deleted = true;
            await _context.SaveChangesAsync();

            return Ok("Appointment deleted successfully.");
        }

        private bool AppointmentExistsDrawingHall(int id)
        {
            return (_context.AppointmentsDrawingHall?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
