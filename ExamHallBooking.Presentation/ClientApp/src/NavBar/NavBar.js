import React from "react";
import "./NavBar.css"; // Import the CSS file for styling (create this file)
import { createRoot } from 'react-dom/client';
import HomeLogo from "../assest/HomeLogo.png"; // Import HomeIcon image


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



const Navbar = ({ onMainClick,showCalBtton, onUserClick, onAdminClick,onSignOutClick,onBackClick,onCalClick,onAllClick, onDrawingHallClick ,showAdminUser,showSignOutButton,showHomeBtton , showBackButton }) => {
    return (


        <nav className="navbar">
            {/* <img onClick={onMainClick} src={HomeLogo} alt='Home Logo' className="homeLogo" /> */}

            <ul>
            {showBackButton && (
                <li onClick={onBackClick}>
                    <span role="img" aria-label="Back Icon">⬅️</span> Back
                </li>
            )}
            {showHomeBtton && (
            <li onClick={onMainClick}>
                    <span role="img" aria-label="Home Icon">🏠</span> Home
                </li>
                )}
                 {showCalBtton && (
                <li onClick={onCalClick}>
                    <span role="img" aria-label="Home Icon">📅</span> Calender
                </li>
                  )}
                {showAdminUser && (
                    <>
                        <li onClick={onUserClick}>
                            <span role="img" aria-label="User Icon">🤵🏻</span> User
                        </li>
                        <div className="admin">
                            <li onClick={onAdminClick}>
                                <span role="img" aria-label="Admin Icon">🔧</span> Admin
                            </li>
                        </div>
                    </>
                )}
                 {showSignOutButton && (
                <button className="signOutButton" onClick={onSignOutClick}>
                    <span role="img" aria-label="Sign Out Icon"></span> Sign Out
                </button>
            )}
               
            </ul>
        </nav>

       
        // <div>
        // </div>

    );
};

export default Navbar;
