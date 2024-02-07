
 import React,{ useState } from 'react';
 import { useAuthenticator } from '@aws-amplify/ui-react';
 import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import  Link  from 'next/link';
 
  
  

const navbar = ({ email, onLogout }:any) => {
  
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const router =useRouter();
  
  const handleLogout = () => {
    
     // Redirect to home route
     
     router.replace('/');
     signOut({global:'true'});
     router.replace('/');
   
  
  
  }; 
  return (
    <div className="nav">
      <div className="logo"><img src='/assets/Peta_logo.svg' alt='Pentabencana_logo' width='150px' height='50px'></img></div>
      <div className="email">{user.signInDetails?.loginId} </div>
      <Link href="/" className='rounded-button logout' onClick={handleLogout}>Logout</Link>
      
    </div>
  );
}; 

export default navbar;
