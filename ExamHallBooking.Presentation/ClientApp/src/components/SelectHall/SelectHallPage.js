import React, { useState } from 'react';
import './SelectHallPage.css';

const ExamHallSelection = () => {
  const [selectedHall, setSelectedHall] = useState(null);

  const handleSelect = (hall) => {
    setSelectedHall(hall);
    alert(`You have selected the ${hall}`);
  };

  return (
    <div className="exam-hall-selection">
      <h1>Select Exam Hall</h1>
      <div className="hall-boxes">
        <div className="hall-box" onClick={() => handleSelect('Computer Department Exam Hall')}>
          <h2>Computer Department Exam Hall</h2>
          <button>Select</button>
        </div>
        <div className="hall-box" onClick={() => handleSelect('Drawing Office Hall ')}>
          <h2>Drawing Office Hall of Admin</h2>
          <button>Select</button>
        </div>
      </div>
    </div>
  );
};

export default ExamHallSelection;
