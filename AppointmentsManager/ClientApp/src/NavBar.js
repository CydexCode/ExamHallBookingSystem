import React from "react";
import "./NavBar.css"; // Import the CSS file for styling (create this file)
import { createRoot } from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


const Navbar = ({ onMainClick, onAdminClick, onUserClick }) => {
    return (





        <nav className="navbar">
            <ul>
                <li onClick={onMainClick}>
                    <span role="img" aria-label="User Icon">
                        👤
                    </span>{" "}
                    Home
                </li>
                <li onClick={onUserClick}>
                    <span role="img" aria-label="User Icon">
                        👤
                    </span>{" "}
                    User
                </li>
                <li onClick={onAdminClick}>
                    <span role="img" aria-label="Admin Icon">
                        👑
                    </span>{" "}
                    Admin
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;