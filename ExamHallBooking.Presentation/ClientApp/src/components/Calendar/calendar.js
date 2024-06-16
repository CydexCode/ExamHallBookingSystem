import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getAppointments as getAppointmentsComHall, filter as filterComHall } from '../AllBookingUserComHall/Lib.js';
import { getAppointmentsDrawingHall as getAppointmentsDrawingHall, filter as filterDrawingHall } from '../AllBookingUserDrawingHall/Lib.js';
import NavBar from '../../NavBar/NavBar.js';
import './calendar.css';

export default function CalendarPage() {
    const [acceptedAppointmentsComHall, setAcceptedAppointmentsComHall] = useState([]);
    const [acceptedAppointmentsDrawingHall, setAcceptedAppointmentsDrawingHall] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        filterComHall.Done = true;
        filterDrawingHall.Done = true;

        // Fetch appointments for ComHall
        getAppointmentsComHall(filterComHall)
            .then(data => {
                setAcceptedAppointmentsComHall(data);
            })
            .catch(e => console.log("Error getting data from ComHall: ", e));

        // Fetch appointments for DrawingHall
        getAppointmentsDrawingHall(filterDrawingHall)
            .then(data => {
                setAcceptedAppointmentsDrawingHall(data);
            })
            .catch(e => console.log("Error getting data from DrawingHall: ", e));
    }, []);

    const handleBackClick = () => {
        window.history.back(); // Navigate to the previous page
    };

    const handleMainClick = () => {
        window.location.href = '/';
    };

    const handleUserClick = () => {
        window.location.href = '/login';
    };

    const handleAdminClick = () => {
        window.location.href = '/adminLogin';
    };

    const handleSignOutClick = () => {
        window.location.href = '/';
    };

    // Function to render tile content for both ComHall and DrawingHall
    const renderTileContent = ({ date, view }) => {
        if (view === 'month') {
            const formattedDate = date.toISOString().split('T')[0];
            const prevDate = new Date(date);
            prevDate.setDate(prevDate.getDate() + 1); // Get previous day's date
            const formattedPrevDate = prevDate.toISOString().split('T')[0];

            // Filter appointments for ComHall
            const appointmentsComHall = acceptedAppointmentsComHall.filter(app => {
                const appDate = app.date.split('T')[0]; // Assuming app.date is in UTC format
                return appDate === formattedPrevDate;
            });

            // Filter appointments for DrawingHall
            const appointmentsDrawingHall = acceptedAppointmentsDrawingHall.filter(app => {
                const appDate = app.date.split('T')[0]; // Assuming app.date is in UTC format
                return appDate === formattedPrevDate;
            });

            return (
                <div className="date-box">
                    <div className="tile-content">

                        <div className='appointment-box1'>
                            {appointmentsComHall.map(app => (
                                <div key={app.id} className="appointment-tile">
                                    <p>{app.examHall}</p>
                                    <p>{app.subject} / {app.year} Batch</p>
                                    <p>{app.time} - {app.endTime}</p>
                                </div>
                            ))}
                        </div>
                        <div className='appointment-box2'>
                            {appointmentsDrawingHall.map(app => (
                                <div key={app.id} className="appointment-tile">
                                    <p>{app.examHall}</p>
                                    <p>{app.subject} / {app.year} Batch</p>
                                    <p>{app.time} - {app.endTime}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
    };

    // Function to add class to each date tile
    const addDateOutline = ({ date, view }) => {
        if (view === 'month') {
            return 'outlined-date';
        }
        return null;
    };

    return (
        <div>
            <NavBar
                onBackClick={handleBackClick}
                onMainClick={handleMainClick}
                onUserClick={handleUserClick}
                onAdminClick={handleAdminClick}
                onSignOutClick={handleSignOutClick}
                showAdminUser={false}
                showSignOutButton={false}
                showBackButton={true}
            />
            <div className="calendar-container">
                <div className="calendar-content">
                    <Calendar
                        onChange={setDate}
                        value={date}
                        tileContent={renderTileContent}
                        tileClassName={addDateOutline}
                    />
                </div>
            </div>
        </div>
    );
}
