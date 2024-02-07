
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "../aws-exports";
import { useState } from 'react';
import MapPage from './map/components/base_layout';
import { signOut } from '@aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { clearStorage } from 'mapbox-gl';

Amplify.configure(awsExports);


export default function Home() {
  const router = useRouter(); // Get the router instance

  
  useEffect(() => {
   
   // Redirect to / route after logout
    
    const handleLogout = async () => {
      try {
        
        router.replace('/'); 
       clearStorage();
       await signOut();
      
       
        
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };

  }, []);
  
  return (
    <>
   
       
       <Authenticator>
      {({ signOut, user }) => (
        <main>
          {user ? (
        <>
           
           {router.push('/map')}
                     
        </>
      ) : (
        <>
        
        
        {router.replace('/')}
        <p>Loading...</p>
        </>
      )}
        </main>
      )}
    </Authenticator>
       </> 
        
      


  )
}
