import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectHallPage.css';
import { useEffect, useState } from "react"
import NavBar from "../../NavBar/NavBar.js"; // Make sure the path is correct
import ConfirmSignOut from "./ConfirmSignOut"; // Import the ConfirmSignOut component


const ExamHallSelection = () => {

    const [showConfirmSignOut, setShowConfirmSignOut] = useState(false);

    const navigate = useNavigate();

    const handleSelect = (hall) => {
        if (hall === 'Computer Department Exam Hall') {
            navigate('/allBooking');
        } else if (hall === 'Drawing Office Hall') {
            navigate('/allBookingUserDrawingHall');
        }
    };
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
    const handleSignOutClick = () => {
        setShowConfirmSignOut(true);
      };
    
      const confirmSignOut = () => {
        setShowConfirmSignOut(false);
        window.location.href = '/';
      };
    
      const cancelSignOut = () => {
        setShowConfirmSignOut(false);
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
            showAdminUser={false} // Hide User and Admin
            showSignOutButton ={true}
        />

        <div className="exam-hall-selection">
            <h1 class="header">Select Exam Hall </h1>
            <div className="hall-boxes">
                <div className="hall-box" onClick={() => handleSelect('Computer Department Exam Hall')}>
                    <h2 className="hall-name">Computer Department Exam Hall</h2>
                </div>
                <div className="hall-box" onClick={() => handleSelect('Drawing Office Hall')}>
                    <h2 className="hall-name">Drawing Office Hall</h2>
                </div>
            </div>
        </div>
        {showConfirmSignOut && (
          <ConfirmSignOut
            onConfirm={confirmSignOut}
            onCancel={cancelSignOut}
          />
        )}
        </div>
        
    );
};

export default ExamHallSelection;




