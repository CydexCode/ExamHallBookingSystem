import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from "../../NavBar/NavBar.js"; // Make sure the path is correct
import './Home.css';
import backgroundImage from '../../assest/Background.png'; // Import your background image
import uniLogo from '../../assest/UniversityLogo.png';

import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



const HomePage = ({ onMainClick, onUserClick, onAdminClick, onAllClick, onDrawingHallClick }) => {

    const handleBackClick = () => {
        window.location.href = '/';
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
    const handleSignOutClick = () => {
        window.location.href = '/';
    };

    return (

        <div>
            <NavBar

                onBackClick={handleBackClick}
                showBackButton={false}
                onMainClick={handleMainClick}
                onUserClick={handleUserClick}

                onAdminClick={handleAdminClick}
                onSignOutClick={handleSignOutClick}
                showAdminUser={true} // Default show User and Admin
                showHomeBtton={true}

            />


            <div className="mainhomepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='content02'>
                    <div className="search-container">
                        <img src={uniLogo} alt="University Logo" className="uniLogo" />

                    </div>
                </div>
                <div className='content01'>
                    <header>
                        <div className="login-register-container">
                            <div className="loginBtn">
                                <span ><Link to="/login">Login</Link></span>
                            </div>
                            <div className="RegisterBTn">
                                <span ><Link to="/register">Register</Link></span>
                            </div>
                        </div>


                        <br></br>
                        <br></br>



                        <input type="text" placeholder="Search..." className='srcBox' />
                        <h3 style={{ color: 'white', fontSize: '25px', paddingRight: '340px', marginTop: 0 }}><br />WELCOME,</h3>
                        <h1 style={{ color: 'white', fontSize: '50px', marginTop: 0 }}><span style={{ fontSize: '30px' }}>To</span> <span className='ehb'>Exam Hall Booking</span></h1>


                        <section className="hero">
                            <p style={{ color: 'white', marginTop: '50px' }}>Easily schedule exams on our user-friendy platform with just a <br />few clicks. Choose your date, time, and location hassle-free.<br /> Join us today for stress-free exam booking!</p>
                            {/* <Link to="/book-exam" className="btn btn-primary">Book Exam</Link> */}
                        </section>
                        <div className="LMbtn">
                            <span>LEARN MORE</span>
                        </div>
                    </header>
                    <main>


                        {/* <section className="about">
                    <h2>About Us</h2>
                </section> */}
                    </main>
                    {/* <footer>
                <p></p>
            </footer> */}
                </div>
            </div>

        </div>
    );
}

export default HomePage;
