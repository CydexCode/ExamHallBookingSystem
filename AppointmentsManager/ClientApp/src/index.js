import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './components/Admin/Home';
import MacAdminHome from './components/MacAdmin/Home';
import UserHome from './components/User/Home';
import UserDrawingHall from './components/UserDrawingHall/Home';
import StaffDrawingHall from './components/StaffDrawingHall/Home';
import AllBooking from './components/AllBooking/Home';
import Staff from './components/Staff/Home';


import MainHome from './components/Home/Main';
import NavBar from './NavBar';
import StaffLogin from './staffLogin';
import Login from './Login';
import LoginDrawingHall from './LoginDrawingHall';
import Register from './Register';
import AdminLogin from './adminLogin';
import AllBookingUserDrawingHall from './components/AllBookingUserDrawingHall/Home';
import StaffLoginDrawingHall from './staffLoginDrawingHall';
import Footer from './Footer';


const App = () => {
    const handleMainClick = () => {
        window.location.href = '/main';
    };

    const handleAllClick = () => {
        window.location.href = '/allBooking';
    };

    const handleAdminClick = () => {
        window.location.href = '/adminLogin';
    };
    const handleDrawingHallClick = () => {
        window.location.href = '/allBookingUserDrawingHall';
    };
    return (
        <Router>
            <div>
            <div>
                <NavBar
                        onMainClick={handleMainClick}
                        onAllClick={handleAllClick}
                        onAdminClick={handleAdminClick}
                        onDrawingHallClick={handleDrawingHallClick}
                />
                <Routes>
                    <Route path="/main" element={<MainHome />} />
                    <Route path="/admin" element={<AdminHome />} />
                        <Route path="/macAdmin" element={<MacAdminHome />} />
                        <Route path="/user" element={<UserHome />} />
                        <Route path="/userDrawingHall" element={<UserDrawingHall />} />
                        <Route path="/staffDrawingHall" element={<StaffDrawingHall />} />
                    <Route path="/login" element={<Login />} />
                        <Route path="/staff" element={<Staff />} />
                        <Route path="/loginDrawingHall" element={<LoginDrawingHall />} />
                        <Route path="/staffLoginDrawingHall" element={<StaffLoginDrawingHall />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/adminLogin" element={<AdminLogin />} />
                    <Route path="/allBooking" element={<AllBooking />} />
                        <Route path="/staffLogin" element={<StaffLogin />} />
                        <Route path="/allBookingUserDrawingHall" element={<AllBookingUserDrawingHall />} />
                </Routes>
                </div>
               <Footer/>
            </div>
        </Router>
    );
};

render(<App />, document.getElementById('root'));
