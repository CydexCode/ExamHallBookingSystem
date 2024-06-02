import React from "react";

export default function ConfirmSignOut({ onConfirm, onCancel }) {
  return (
    <div className="modalSignOut" align="center">
      <div className="modalSignOut-content" align="center" >
        <h2 align="center" >Confirm Sign Out</h2>
        <br></br>
        <p align="center" >Are you sure you want to sign out?</p>
        <br></br>
        <div className="modalSignOut-actions" >
        <button className="btnSignOut" align="center" onClick={onCancel}>No</button>
          <button className="btnSignOut" align="center"  onClick={onConfirm}>Yes</button>
         
        </div>
      </div>
    </div>
  );
}
