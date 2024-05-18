﻿import React from "react";
import "./NavBar.css"; // Import the CSS file for styling (create this file)
import { createRoot } from 'react-dom/client';
import HomeLogo from "./assest/HomeLogo.png"; // Import HomeIcon image


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



const Navbar = ({ onMainClick, onAdminClick, onAllClick, onUserLoginClick, onUserRegisterClick }) => {
    return (

        <nav className="navbar">
            <img onClick={onMainClick} src={HomeLogo} alt='Home Logo' className="homeLogo" />

            <ul>
                <li onClick={onMainClick}>
                    <span role="img" aria-label="User Icon">
                        👤
                    </span>{" "}
                    Home
                </li>
                <li onClick={onAllClick}>
                    <span role="img" aria-label="User Icon">
                        👤
                    </span>{" "}
                    All Booking
                </li>
                <li onClick={onAdminClick}>
                    <span role="img" aria-label="Admin Icon">
                        👑
                    </span>{" "}
                    Admin
                </li>
               
                <li onClick={onUserLoginClick} className="log">
                    LOGIN
                </li>
                <div className="vl"></div>
                <div className="vl" style={{ marginLeft: '2px' }}></div>
                <li onClick={onUserRegisterClick} className="reg">
                    REGISTER
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;