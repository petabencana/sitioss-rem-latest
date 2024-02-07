'use client';

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar';
import React, { useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


const MainComponent = () => {
 
  
const { authStatus } = useAuthenticator(context => [context.authStatus]);
  return (

    <>
      {authStatus === 'configuring' && 'Loading...'}
      {authStatus !== 'authenticated' ? <Authenticator /> : <Navbar />}
    </>
    
    
  );
};

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}
)

{
    return (
    <html lang="en">
      <body className={inter.className}>
        <Authenticator>
      <MainComponent></MainComponent>
        {children}</Authenticator></body>
    </html>
  )
}
