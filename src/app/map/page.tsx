'use client';
import dynamic from 'next/dynamic';

const MapPage = dynamic(() => import('./components/base_layout'), { ssr: false });

export default function Map(){

  return(
    <MapPage />
  )
}