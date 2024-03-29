import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../Login';
import Register from '../../Register';
import "./Home.css";
import backgroundImage from '../../assest/Background2.png'; // Import your background image
import uniLogo from '../../assest/UniversityLogo.png';


const HomePage = () => {
    return (
                <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className='content01'>
                <header>
                    <div className="login-register-container">
                        <div className="loginBtn">
                            <span><Link to="/login">Login</Link></span>
                        </div>
                        <div className="RegisterBTn">
                            <span><Link to="/register">Register</Link></span>
                        </div>
                    </div>

                    
                    <br></br>
                    <br></br>
                    

                    <div className="search-container">
                        <img src={uniLogo} alt="University Logo" className="uniLogo" />
                        <input type="text" placeholder="Search..." className='srcBox' />
                    </div>

                    <h3 style={{ color: 'white', fontSize: '25px', paddingRight: '340px', marginTop: 0 }}><br />WELCOME,</h3>
                    <h1 style={{ color: 'white', fontSize: '50px', marginTop: 0 }}><span style={{ fontSize: '30px' }}>To</span> <span className='ehb'>Exam Hall Booking</span></h1>
                </header>
            <main>
                <section className="hero">
                    <p style={{ color: 'white',marginTop:'50px'}}>Easily schedule exams on our user-friendy platform with just a <br/>few clicks. Choose your date, time, and location hassle-free.<br/> Join us today for stress-free exam booking!</p>
                    {/* <Link to="/book-exam" className="btn btn-primary">Book Exam</Link> */}
                </section>
                <div className="LMbtn">
                        <span>LEARN MORE</span>
                </div>
                {/* <section className="about">
                    <h2>About Us</h2>
                </section> */}
            </main>
            {/* <footer>
                <p></p>
            </footer> */}
            </div>
        </div>
  /*      <div>
            <h1>Welcome to the Home Page agg</h1>
            <p>This is the main entry point of your application.</p>
            <Link to="/login">Login</Link>
            <br></br>
            <br></br>
            <Link to="/register">Register</Link>
        </div>*/
    );
}

export default HomePage;
