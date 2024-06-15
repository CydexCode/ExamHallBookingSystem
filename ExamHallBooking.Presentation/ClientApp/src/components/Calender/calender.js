import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from "../../NavBar/NavBar.js"; // Make sure the path is correct
import './calender.css';
import backgroundImage from '../../assest/Background.png'; // Import your background image
import uniLogo from '../../assest/UniversityLogo.png';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const Calender = ({ onMainClick, onUserClick, onAdminClick, onAllClick, onDrawingHallClick }) => {

    const handleBackClick = () => {
        window.history.back(); // Navigate to the previous page
    };

    const handleCalClick = () => {
        window.location.href = '/calender';
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

    return (
        <NavBar
            onBackClick={handleBackClick}
            onCalClick={handleCalClick}
            showBackButton={true}
            onMainClick={handleMainClick}
            onUserClick={handleUserClick}
            onAdminClick={handleAdminClick}
            onSignOutClick={handleSignOutClick}
            showAdminUser={false} // Default show User and Admin
            showHomeBtton={false}
            showCalBtton={false}
        />
    );
}

export default Calender;
