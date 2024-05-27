import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <ul className='footerUL'>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>LinkedIn</li>
            </ul>
            <p className='footerText'>
                &copy; 2024 Exam Booking System | All rights reserved | Terms of Service | Privacy
            </p>
        </div>
    );
}

export default Footer;
