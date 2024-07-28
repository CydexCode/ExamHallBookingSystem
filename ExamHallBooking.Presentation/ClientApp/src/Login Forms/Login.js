import './login_rejister.css'; // Import the CSS file
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assest/Background1.png'; // Import your background image
import NavBar from "../NavBar/NavBar.js"; // Make sure the path is correct

function Login() {
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

  

    function validateForm() {
        const newErrors = {};
        newErrors.loginName = validateLoginName(loginName);
        newErrors.password = validatePassword(password);
        setErrors(newErrors);

        return Object.values(newErrors).every(error => error === '');
    }

    function GetLoginDetails() {
        if (!validateForm()) {
            alert("Invalid input field detected");
            return;
        }

        let items = { loginName, password };

        fetch('https://localhost:44418/api/Users/GetLogin', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(items)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
                navigate("/selectHallPage");
            })
        }).catch((error) => {
            console.error('Error occurred:', error);
        });
    }

    const handleBackClick = () => {
        window.location.href = '/selectHallPage';
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

    const validateLoginName = (value) => {
        const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9._%+-]*@eng\.jfn\.ac\.lk$/;
        if (!value) {
            return 'Email is required.';
        } else if (!emailRegex.test(value)) {
            return 'Invalid email address type.';
        }
        return '';
    }

    const handleLoginNameChange = (e) => {
        setLoginName(e.target.value);
        setErrors(prev => ({ ...prev, loginName: validateLoginName(e.target.value) }));
    }

    const validatePassword = (value) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasDigit = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        if (!value) {
            return 'Password is required.';
        } else if (value.length < minLength) {
            return 'Enter Correct Password';
        } else if (!hasUpperCase || !hasLowerCase || !hasDigit || !hasSpecialChar) {
            return 'Enter Correct Password';
        }
        return '';
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrors(prev => ({ ...prev, password: validatePassword(e.target.value) }));
    }

    const Tooltip = ({ message }) => {
        return (
            <div className="tooltip">
                {message}
            </div>
        );
    };

    return (
        <div>
            <NavBar
                onBackClick={handleBackClick}
                showBackButton={false}
                onMainClick={handleMainClick}
                onUserClick={handleUserClick}
                showCalBtton={false}
                onAdminClick={handleAdminClick}
                showSignOutButton={false}
                onSignOutClick={false}
                showAdminUser={false}
                showHomeBtton={true}
            />

            <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="bg-gradient-primary">
                    <div className="container2">
                        <div className="row2 justify-content-center">
                            <div className="col-xl-10 col-lg-12 col-md-9">
                                <div className="card o-hidden border-0 shadow-lg my-5">
                                    <div className="card-body p-0">
                                        <div className="row2">
                                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                            <div className="col-lg-6">
                                                <div className="p-5">
                                                    <div className="text-center2">
                                                        <h1 className="h4 text-gray-900 mb-4">User Login</h1>
                                                    </div>
                                                    <div className="user">
                                                        <div className="form-group">
                                                            <div className="input-container">
                                                                <input type="text" className="form-control form-control-user"
                                                                    value={loginName} onChange={handleLoginNameChange}
                                                                    placeholder="Email" />
                                                                {errors.loginName && <Tooltip message={errors.loginName} />}
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="input-container">
                                                                <input type="password" className="form-control form-control-user"
                                                                    value={password} onChange={handlePasswordChange}
                                                                    placeholder="Password" />
                                                                {errors.password && <Tooltip message={errors.password} />}
                                                            </div>
                                                        </div>
                                                        <div className="form-group2">
                                                            <div className="custom-control custom-checkbox small">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                                <label className="custom-control-label">Remember Me</label>
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-primary btn-user btn-block" onClick={GetLoginDetails}>
                                                            Login
                                                        </button>
                                                        <hr />
                                                    </div>
                                                    <hr />
                                                    <div className="text-center2" style={{ color: 'white' }}>
                                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                                    </div>
                                                    <div className="text-center2" style={{ color: 'white' }}>
                                                        <a className="small2" href="register">Create an Account!</a>
                                                    </div>
                                                </div>
                                            </div>
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
