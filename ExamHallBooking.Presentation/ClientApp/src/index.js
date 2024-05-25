import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './components/ComAdmin/Home';
import MacAdminHome from './components/MacAdmin/Home';
import UserHome from './components/UserComHall/Home';
import UserDrawingHall from './components/UserDrawingHall/Home';
import StaffDrawingHall from './components/StaffDrawingHall/Home';
import AllBooking from './components/AllBookingUserComHall/Home';
import Staff from './components/StaffComHall/Home';
import SelectHallPage from './components/SelectHall/SelectHallPage';

import MainHome from './components/Home/Main';
import NavBar from './NavBar/NavBar';
import StaffLogin from './Login Forms/staffLogin';
import Login from './Login Forms/Login';
import LoginDrawingHall from './Login Forms/LoginDrawingHall';
import Register from './Login Forms/Register';
import AdminLogin from './Login Forms/adminLogin';
import AllBookingUserDrawingHall from './components/AllBookingUserDrawingHall/Home';
import StaffLoginDrawingHall from './Login Forms/staffLoginDrawingHall';
import Footer from './Footer/Footer';


const App = () => {
    const handleMainClick = () => {
        window.location.href = '/main';
    };

    const handleUserClick = () => {
        window.location.href = '/login';
    };
    const handleAdminClick = () => {
        window.location.href = '/adminLogin';
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
                <NavBar
                        onMainClick={handleMainClick}
                        onUserClick={handleUserClick}
                       
                        onAdminClick={handleAdminClick}
                     
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
                        <Route path="/selectHallPage" element={<SelectHallPage />} />
                </Routes>
                </div>
               <Footer/>
            </div>
        </Router>
    );
};

render(<App />, document.getElementById('root'));
