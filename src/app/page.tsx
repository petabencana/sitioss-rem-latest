
import Image from 'next/image'
import styles from './page.module.css'
/*
import Navbar from './navbar';
import React, { useState } from 'react';

const MainComponent = () => {
  const [userEmail, setUserEmail]:any = useState('user@example.com');

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };
} 
*/
function MyButton() {
  return (
    
    
    <button>
      LOGIN
    </button>
    
  );
}
export default function Home() {
  /*
  const [userEmail, setUserEmail] = useState('user@example.com');

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('User logged in');
    
  };*/
  return (
    <>
    <div>
    {/*<Navbar email={userEmail} onLogout={handleLogout} />*/}
    {/* Rest of your main component content */}
  </div>
       <MyButton/>
       </> 
        
      


  )
}
