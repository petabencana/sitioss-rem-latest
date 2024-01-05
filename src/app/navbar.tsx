
 import React,{ useState } from 'react';
 import { useAuthenticator } from '@aws-amplify/ui-react';
 import { useNavigate } from 'react-router-dom';
 
  
  

const navbar = ({ email, onLogout }:any) => {
  
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  /*
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut();
    // Redirect to home route
    navigate('/');

  }; */
  return (
    <div className="nav">
      <div className="logo"><img src='/assets/Peta_logo.svg' alt='Pentabencana_logo' width='150px' height='50px'></img></div>
      <div className="email">{user.signInDetails?.loginId} </div>
      <button className="logout" onClick={signOut}>Logout</button>
      
    </div>
  );
}; 

export default navbar;
