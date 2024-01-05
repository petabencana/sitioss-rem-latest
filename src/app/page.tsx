
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Amplify } from 'aws-amplify';
//import { useNavigate } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
//import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "../aws-exports";
import { useState } from 'react';
import HomePage from './map/page';
import { signOut } from '@aws-amplify/auth';
import { useRouter } from 'next/navigation';

Amplify.configure(awsExports);
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
  const router = useRouter(); // Get the router instance

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/'); // Redirect to / route after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  //const [userEmail, setUserEmail] = useState('user@example.com');
  /*
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut();
    navigate('/');
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
       
       <Authenticator>
      {({ signOut, user }) => (
        <main>
          {user ? (
        <>
           
            <HomePage />
            {/*
            <Routes>
            <Route path="/" element={<Navigate to="map" />} />
            <Route path="/map" element={<HomePage/>} />
             <Route path="/home" render={() => <map />} /> 
          </Routes> */}
          
        </>
      ) : (
        <p>Loading...</p>
      )}
        </main>
      )}
    </Authenticator>
       </> 
        
      


  )
}
