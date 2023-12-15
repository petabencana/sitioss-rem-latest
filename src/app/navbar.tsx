
 import React,{ useState } from 'react';

  

const navbar = ({ email, onLogout }:any) => {
  return (
    <div className="nav">
      <div className="logo">Your Logo</div>
      <div className="email">{email}
      
      </div>
      <button className="logout" onClick={onLogout}>Logout</button>
    </div>
  );
}; 

export default navbar;
