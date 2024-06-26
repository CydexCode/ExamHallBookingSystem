import React from 'react';
import { render } from 'react-dom';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';


import AdminHome from './components/ComAdmin/Home.js';
import MacAdminHome from './components/MacAdmin/Home.js';

import StaffDrawingHall from './components/StaffDrawingHall/Home.js';
import AllBooking from './components/AllBookingUserComHall/Home.js';
import Staff from './components/StaffComHall/Home.js';
import SelectHallPage from './components/SelectHall/SelectHallPage.js';

import MainHome from './components/Home/Main';

import StaffLogin from './Login Forms/staffLogin';
import Login from './Login Forms/Login';

import Register from './Login Forms/Register';
import AdminLogin from './Login Forms/adminLogin';
import AllBookingUserDrawingHall from './components/AllBookingUserDrawingHall/Home';
import StaffLoginDrawingHall from './Login Forms/staffLoginDrawingHall';
import Footer from './Footer/Footer';

import Calendar from './components/Calendar/calendar.js';






const App = () => {


    const handleBackClick = () => {
        window.location.href = '/selectHallPage';
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
    /*    const handleAllClick = () => {
            window.location.href = '/allBooking';
        };
    
      
        const handleDrawingHallClick = () => {
            window.location.href = '/allBookingUserDrawingHall';
        };*/



    return (


        <Router>
            <div>



                <div>




                    <Routes>

                        <Route path="/" element={<MainHome />} />
                        <Route path="/admin" element={<AdminHome />} />
                        <Route path="/macAdmin" element={<MacAdminHome />} />

                        <Route path="/staffDrawingHall" element={<StaffDrawingHall />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/staff" element={<Staff />} />
                        <Route path="/staffLoginDrawingHall" element={<StaffLoginDrawingHall />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/adminLogin" element={<AdminLogin />} />
                        <Route path="/allBooking" element={<AllBooking />} />
                        <Route path="/staffLogin" element={<StaffLogin />} />
                        <Route path="/allBookingUserDrawingHall" element={<AllBookingUserDrawingHall />} />
                        <Route path="/selectHallPage" element={<SelectHallPage />} />

                        <Route path="/calendar" element={<Calendar />} />
                    </Routes>



                </div>
                <Footer />
            </div>
        </Router>
    );
};

render(<App />, document.getElementById('root'));
