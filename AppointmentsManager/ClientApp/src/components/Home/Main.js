import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../Login';
import Register from '../../Register';
import "./Home.css";
import backgroundImage from '../../assest/Background.png'; // Import your background image
import uniLogo from '../../assest/UniversityLogo.png'

const HomePage = () => {
    return (
        <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='content01'>
                <header>
                    <div className="login-register-container">
                        <div className="loginBtn">
                            <span>LOGIN</span>
                        </div>
                        <div className="RegisterBTn">
                            <span>REGISTER</span>
                        </div>
                    </div>
                    <div className="search-container">
                        <img src={uniLogo} alt="University Logo" className="uniLogo" />
                        <input type="text" placeholder="Search..." className='srcBox' />
                    </div>

                    <h3 style={{ color: 'white', fontSize: '25px', paddingRight: '340px',marginTop:0 }}><br />WELCOME,</h3>
                    <h1 style={{ color: 'white', fontSize: '50px', marginTop: 0 }}><span style={{ fontSize: '30px' }}>To</span> <span className='ehb'>Exam Hall Booking</span></h1>
                </header>

                <main>
                    <section className="hero">
                        <p style={{ color: 'white', marginTop: '30px' }}>Easily schedule exams on our user-friendy platform with just a <br />few clicks. Choose your date, time, and location hassle-free.<br /> Join us today for stress-free exam booking!</p>
                    </section>
                    <div className="LMbtn">
                        <span>LEARN MORE</span>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HomePage;
