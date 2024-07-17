﻿import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminLogin.css'; // Import the CSS file
import backgroundImage from '../assest/Background1.png'; // Import your background image
import NavBar from "../NavBar/NavBar.js"; // Make sure the path is correct

function Login() {
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function validateEmail(email) {
        // Regular expression for basic email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }


    function GetLoginDetails(event) {

        // Check if loginName and password are not empty
        if (loginName.trim() === '' || password.trim() === '') {
            // Show an error message or handle empty inputs appropriately

            alert("Login name and password are required.");
            return;
        }
        if (!validateEmail(loginName)) {
            alert("Please enter a valid email address.");
        }
        event.preventDefault(); // Prevent default form submission behavior

        // Define admin credentials
        const adminCredentials = [
            { loginName: 'aradmin@eng.jfn.ac.lk', password: 'arAdmin123', route: '/admin' },
            { loginName: 'macadmin@eng.jfn.ac.lk', password: 'macAdmin123', route: '/macAdmin' }
        ];

        // Check if entered credentials match any admin credentials
        const matchedAdmin = adminCredentials.find(cred => cred.loginName === loginName && cred.password === password);

        if (matchedAdmin) {
            // Navigate to respective admin page if credentials match
            navigate(matchedAdmin.route);
        } else {
            // Display error message or handle invalid credentials
            console.log("Invalid credentials");
        }
    }

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

        <div>
            <NavBar

                onMainClick={handleMainClick}
                onUserClick={handleUserClick}

                onAdminClick={handleAdminClick}
                showSignOutButton={false}
                onSignOutClick={false}
                showAdminUser={false} // Hide User and Admin
                showHomeBtton={true}
                showCalBtton={false}
            />


            <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="bg-gradient-primary">
                <div className="container2">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>

                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h2 ">Admin Login</h1>
                                            </div>
                                            <div className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        value={loginName} onChange={(e) => { setLoginName(e.target.value) }}
                                                        placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                                                        placeholder="Password" />
                                                </div>
                                                <button className="btn btn-primary btn-user btn-block" onClick={GetLoginDetails}>
                                                    Login
                                                </button>
                                                <hr />

                                            </div>
                                            <hr />


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;