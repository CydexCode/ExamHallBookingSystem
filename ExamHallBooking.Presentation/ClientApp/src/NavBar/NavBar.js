import React from "react";
import "./NavBar.css"; // Import the CSS file for styling (create this file)
import { createRoot } from 'react-dom/client';
import HomeLogo from "../assest/HomeLogo.png"; // Import HomeIcon image


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



const Navbar = ({ onMainClick, onUserClick, onAdminClick, onAllClick, onDrawingHallClick }) => {
    return (

        <nav className="navbar">
            <img onClick={onMainClick} src={HomeLogo} alt='Home Logo' className="homeLogo" />

            <ul>
            {/*    <li onClick={onMainClick}>
                    <span role="img" aria-label="User Icon">
                        
                    </span>{" "}
                    Home
                </li>*/}
                <li onClick={onUserClick}>
                    <span role="img" aria-label="User Icon">

                    </span>{" "}
                    User
                </li>
           {/*     <li onClick={onDrawingHallClick}>
                    <span role="img" aria-label="User Icon">

                    </span>{" "}
                    Drawing Hall
                </li>
                <li onClick={onAllClick}>
                    <span role="img" aria-label="User Icon">
                        
                    </span>{" "}
                    Computer Department Hall
                </li>*/}
                <div className="admin">
                <li onClick={onAdminClick}>
                    <span role="img" aria-label="Admin Icon">
                        
                    </span>{" "}
                    Admin
                </li>
                </div>

             {/*   <li className="SignOut">
                    SignOut
                </li>*/}
               
            </ul>
        </nav>
    );
};

export default Navbar;