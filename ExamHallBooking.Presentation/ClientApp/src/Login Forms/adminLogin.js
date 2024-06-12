// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminLogin.css';
import backgroundImage from '../assest/Background1.png';
import NavBar from "../NavBar/NavBar.js";
import { useAuth } from './AuthContext';

function Login() {
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login, logout } = useAuth();

    function GetLoginDetails(event) {
        event.preventDefault();

        const adminCredentials = [
            { loginName: 'ar admin', password: 'arAdmin123', route: '/admin' },
            { loginName: 'mac admin', password: 'macAdmin123', route: '/macAdmin' }
        ];

        const matchedAdmin = adminCredentials.find(cred => cred.loginName === loginName && cred.password === password);

        if (matchedAdmin) {
            login(); // Set authentication status to true
            navigate(matchedAdmin.route);
        } else {
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
        logout(); // Clear authentication status
        navigate('/'); // Redirect to home page
    };

    return (
        <div>
            <NavBar
                onMainClick={handleMainClick}
                onUserClick={handleUserClick}
                onAdminClick={handleAdminClick}
                showSignOutButton={true} // Show sign-out button
                onSignOutClick={handleSignOutClick}
                showAdminUser={false}
                showHomeBtton={true}
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
                                                <h1 className="h2">Admin Login</h1>
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
    );
}

export default Login;
