import React from "react";
import "./NavBar.css"; // Import the CSS file for styling (create this file)
import { createRoot } from 'react-dom/client';
import HomeLogo from "../assest/HomeLogo.png"; // Import HomeIcon image


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



const Navbar = ({ onMainClick, onAdminClick, onAllClick, onDrawingHallClick }) => {
    return (
        <div>
            <nav className="navbar">
                <img onClick={onMainClick} src={HomeLogo} alt='Home Logo' className="homeLogo" />
                <ul>
                    <li onClick={onMainClick}>
                        Home
                    </li>
                    <li onClick={onDrawingHallClick}>
                        User
                    </li>
                    <li onClick={onAdminClick}>
                        Admin
                    </li>
                </ul>
            </nav>
        </div>
        // <div>
        // </div>
    );
};

export default Navbar;