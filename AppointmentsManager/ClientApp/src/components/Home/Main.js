import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage">
            <header>
                <h1>Exam Booking System</h1>
            </header>
            <main>
                <section className="hero">
                    <h2>Welcome to the Exam Booking System</h2>
                    <p>Book your exams hassle-free with our intuitive platform.</p>
                    <Link to="/book-exam" className="btn btn-primary">Book Exam</Link>
                </section>
                <section className="features">
                    <h2>Features</h2>
                    <ul>
                        <li>Easy exam booking process</li>
                        <li>View available exam slots</li>
                        <li>Secure payment options</li>
                        <li>Instant confirmation</li>
                    </ul>
                </section>
                <section className="about">
                    <h2>About Us</h2>
                    <p>We are dedicated to providing a seamless experience for booking exams and ensuring the best possible service for our users.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Exam Booking System. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
