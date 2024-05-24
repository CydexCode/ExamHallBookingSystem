import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectHallPage.css';

const ExamHallSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (hall) => {
    if (hall === 'Computer Department Exam Hall') {
      navigate('/computer-department-exam-hall');
    } else if (hall === 'Drawing Office Hall') {
      navigate('/drawing-office-hall');
    }
  };

  return (
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
  );
};

export default ExamHallSelection;
