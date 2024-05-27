
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
    const navigate = useNavigate();
    function AddUser() {
        let items = { id, loginName, name, mobile, password, status }
        console.warn(items);
        fetch('https://localhost:44418/api/Users/AddUsers',
            {
                method: "POST",
                headers:
                {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify(items)
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp);
                    navigate("/login");
                    alert(resp.statusMessage);
                })
            })
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
           showSignOutButton ={false}
           onSignOutClick={false}
            showAdminUser={false} // Hide User and Admin
            showHomeBtton ={true}
        />

        <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bg-gradient-primary">

            <div className="container3">
                <div><input type='hidden' value={id} onChange={(e) => { setId(e.target.value) }}></input> </div>
                <div><input type='hidden' value={status} onChange={(e) => { setStatus(e.target.value) }}></input> </div>

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/*  <!-- Nested Row within Card Body --> */}
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
                                                value={loginName} onChange={(e) => { setLoginName(e.target.value) }}
                                                placeholder="Login Name" />
                                         </div>
                                       
                                        <div className="form-group row">
                                                <input type="text" className="form-control form-control-user"
                                                    value={name} onChange={(e) => { setName(e.target.value) }}
                                                    placeholder="Email" />
                                        </div>
                                        <div className="form-group row">
                                          
                                                <input type="text" className="form-control form-control-user"
                                                    value={mobile} onChange={(e) => { setMobile(e.target.value) }}
                                                    placeholder="Mobile" />
                                          
         
                                        </div>
                                        <div className="form-group row">

                                                <input type="password" className="form-control form-control-user"
                                                    value={password} onChange={(e) => { setPassword(e.target.value) }}
                                                    placeholder="password" />


                                        </div>
                                        <button className="btn btn-primary btn-user btn-block" onClick={AddUser}>
                                            Register Account
                                        </button>
                                        <hr />
                                        {/* <a href="index.html" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i> Register with Google
                                        </a>
                                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                        </a> */}
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
    )

}

export default Register
