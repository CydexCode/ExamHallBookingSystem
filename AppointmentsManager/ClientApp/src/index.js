import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './components/Admin/Home';
import UserHome from './components/User/Home';
import MainHome from './components/Home/Main';
import NavBar from './NavBar';

const App = () => {
    const handleMainClick = () => {
        window.location.href = '/main';
    };

    const handleUserClick = () => {
        window.location.href = '/user';
    };

    const handleAdminClick = () => {
        window.location.href = '/admin';
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
                    <Route path="/user" element={<UserHome />} />
                    <Route element={<MainHome />} /> {/* Default route */}
                </Routes>
            </div>
        </Router>
    );
};

render(<App />, document.getElementById('root'));
