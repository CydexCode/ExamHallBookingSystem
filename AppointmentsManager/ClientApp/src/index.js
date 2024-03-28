import React from 'react';
import { render } from 'react-dom';
// import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './components/Admin/Home';
import MacAdminHome from './components/MacAdmin/Home';
import UserHome from './components/User/Home';
import AllBooking from './components/AllBooking/Home';
import Staff from './components/Staff/Home';

import MainHome from './components/Home/Main';
import NavBar from './NavBar';
import StaffLogin from './staffLogin';
import Login from './Login';
import Register from './Register';
import AdminLogin from './adminLogin';

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

    return (
        <Router>
            <div>
                    <NavBar
                        onMainClick={handleMainClick}
                        onAllClick={handleAllClick}
                        onAdminClick={handleAdminClick}
                    />
                    <Routes>
                        <Route path="/main" element={<MainHome />} />
                        <Route path="/admin" element={<AdminHome />} />
                        <Route path="/macAdmin" element={<MacAdminHome />} />
                        <Route path="/user" element={<UserHome />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/staff" element={<Staff />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/adminLogin" element={<AdminLogin />} />
                        <Route path="/allBooking" element={<AllBooking />} />
                        <Route path="/staffLogin" element={<StaffLogin />} />
                    </Routes>
                    <Footer/>
            </div>

        </Router>
    );
};

render(<App />, document.getElementById('root'));
