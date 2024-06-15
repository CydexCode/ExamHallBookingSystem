import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login_rejister.css'; // Import the CSS file
import backgroundImage from '../assest/Background1.png'; // Import your background image
import NavBar from "../NavBar/NavBar.js"; // Make sure the path is correct

function Register() {
    const [id, setId] = useState('0');
    const [loginName, setLoginName] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    function validateEmail(email) {
        // Regular expression for basic email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function AddUser() {
        let formErrors = {};

        // Check if name, loginName, password, and mobile are not empty
        if (name.trim() === '') {
            formErrors.name = "Name is required.";
        }
        if (loginName.trim() === '') {
            formErrors.loginName = "Login email is required.";
        } else if (!validateEmail(loginName)) {
            formErrors.loginName = "Please enter a valid email address.";
        }
        if (password.trim() === '') {
            formErrors.password = "Password is required.";
        }
        if (mobile.trim() === '') {
            formErrors.mobile = "Mobile number is required.";
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            // Show an alert message with all errors
            alert(Object.values(formErrors).join('\n'));
            return;
        }

        let items = { id, loginName, name, mobile, password, status };
        console.warn(items);

        fetch('https://localhost:44418/api/Users/AddUsers', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(items)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
                navigate("/login");
                alert(resp.statusMessage);
            });
        });
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
            />

            <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="bg-gradient-primary">
                    <div className="container3">
                        <div><input type='hidden' value={id} onChange={(e) => { setId(e.target.value) }}></input> </div>
                        <div><input type='hidden' value={status} onChange={(e) => { setStatus(e.target.value) }}></input> </div>

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row2 justify-content-center">
                                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                                    <div className="col-lg-7">
                                        <div className="p-5">
                                            <div className="text-center2">
                                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                            </div>
                                            <div className="user">
                                                <div className="form-group row">
                                                    <input type="text" className="form-control form-control-user"
                                                        value={name} onChange={(e) => { setName(e.target.value) }}
                                                        placeholder="Name" required />
                                                   
                                                </div>
                                                <div className="form-group row">
                                                    <input type="email" className="form-control form-control-user"
                                                        value={loginName} onChange={(e) => { setLoginName(e.target.value) }}
                                                        placeholder="Login Email" required />
                                                    
                                                </div>
                                                <div className="form-group row">
                                                    <input type="password" className="form-control form-control-user"
                                                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                                                        placeholder="Password" required />
                                                   
                                                </div>
                                                <div className="form-group row">
                                                    <input type="number" className="form-control form-control-user"
                                                        value={mobile} onChange={(e) => { setMobile(e.target.value) }}
                                                        placeholder="Mobile" required />
                                                   
                                                </div>

                                                <button className="btn btn-primary btn-user btn-block" onClick={AddUser}>
                                                    Register Account
                                                </button>
                                                <hr />
                                            </div>
                                            <hr />
                                            <div className="text-center2" style={{ color: 'white' }}>
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center2" style={{ color: 'white' }}>
                                                <a className="small2" href="login">Already have an account? Login!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <script src="vendor/jquery/jquery.min.js"></script>
                    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
                </div>
            </div>
        </div>
    );
}

export default Register;
