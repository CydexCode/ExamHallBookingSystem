import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './components/Admin/Home';
import MacAdminHome from './components/MacAdmin/Home';
import UserHome from './components/User/Home';

import MainHome from './components/Home/Main';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import AdminLogin from './adminLogin';

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

    return (
        <Router>
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/adminLogin" element={<AdminLogin />} />
                </Routes>
            </div>
        </Router>
    );
};

render(<App />, document.getElementById('root'));
