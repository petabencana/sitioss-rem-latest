

'use client';
// LeafletMap.tsx

import React, { useEffect,useRef } from 'react';
import { MapContainer, Marker, TileLayer,GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import Legend from './Legend';
const DynamicTileLayer = dynamic(() => import('react-leaflet').then((module) => module.TileLayer), { ssr: false });
const DynamicGeoJSON = dynamic(() => import('react-leaflet').then((module) => module.GeoJSON), { ssr: false });
const DynamicMapContainer = dynamic(() => import('react-leaflet').then((module) => module.MapContainer), { ssr: false });
interface LeafletMapProps {
 
 geoJsonData:any;
 isPolygonMarked: boolean;
  }
 
// Use the LeafletMapProps in the component

const LeafletMap: React.FC<LeafletMapProps> = ({ geoJsonData,isPolygonMarked }) => {
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
     
    }
    
    
    
  }, []); // Empty dependency array ensures this effect runs only once

  const style = {
    fillColor: '#00b5e2',
    weight: 2,
    opacity: 1,
    color: 'gray',
    fillOpacity: 0.7,
  };
  const mapOptions = {
    maxZoom: 18, // Adjust the maxZoom according to your requirements
  };

  
  return (
    <>
    <DynamicMapContainer key={isPolygonMarked ? 'marked' : 'not-marked'} center={[-6.172554, 106.809860]} zoom={18} style={{ height: '800px', width: '100%' }}>
      <DynamicTileLayer 
        url="https://api.mapbox.com/styles/v1/petabencana/ckq0nc6hp01vw17p9n17yxue2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGV0YWJlbmNhbmEiLCJhIjoiY2s2MjF1cnZmMDlxdzNscWc5MGVoMTRkeCJ9.PGcoQqU6lBrcLfBmvTrWrQ"
      />
      {/* Add other map components here */}
      {isPolygonMarked && geoJsonData?  <DynamicGeoJSON data={geoJsonData.features} style={style} /> : null}
      
      
    </DynamicMapContainer>
    <Legend />
    </>
  );
};

export default LeafletMap;
