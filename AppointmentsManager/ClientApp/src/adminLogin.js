﻿import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminLogin.css'; // Import the CSS file

function Login() {
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function GetLoginDetails() {
        // Define admin credentials
        const adminCredentials = [
            { loginName: 'ar admin', password: 'arAdmin123', route: '/admin' },
            { loginName: 'mac admin', password: 'macAdmin123', route: '/macAdmin' }
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

    return (
        <div className="bg-gradient-primary">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Admin Login</h1>
                                            </div>
                                            <div className="user">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user"
                                                        value={loginName} onChange={(e) => { setLoginName(e.target.value) }}
                                                        placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                                                        placeholder="Password" />
                                                </div>

                                                 <div className="remember-forgot">
                                                    <label><input type = "checkbox"/>Remember Me</label>
                                                        <a href = "#">Forgot password?</a>
                                                </div>

                                                <button className="btn btn-primary btn-user btn-block" onClick={GetLoginDetails}>
                                                    LOGIN
                                                </button>
                                               
                                                <div className="register-link">
                                                    <p>Don't have an account? <a href = "#">Sign Up</a></p>
                                                       
                                                </div>
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
