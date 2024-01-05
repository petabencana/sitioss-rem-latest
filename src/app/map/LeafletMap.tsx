

'use client';
// LeafletMap.tsx

import React, { useEffect } from 'react';
import { MapContainer, Marker, TileLayer,GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
//import LeafletMapWithPolygon from 'react-leaflet';
import {GeoJsonObject } from 'geojson';
const DynamicMapContainer = dynamic(() => import('react-leaflet').then((module) => module.MapContainer), { ssr: false });
interface LeafletMapProps {
 // geoJsonData: GeoJsonObject; 
 
 geoJsonData:any;
   /*geoJsonData: {
      // Define the structure of your geoJsonData
      
      statusCode: number;
      result: {
        
        type: string;
        objects: {
          output: {
            type: string;
            geometries: {
              type: string;
              properties: {
                area_id: string;
                geom_id: string;
                area_name: string;
                parent_name: string;
                city_name: string;
                state: number;
                last_updated: string;
              };
              arcs: number[][];
            }[];
          };
        };
        arcs: number[][];
      };
      transform: {
        scale: [number, number];
        translate: [number, number];
      };
      bbox: [number, number, number, number];
    };*/
  }
  //type Props = { data: LeafletMapProps[] };  
// Use the LeafletMapProps in the component

const LeafletMap: React.FC<LeafletMapProps> = ({ geoJsonData }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Your Leaflet initialization code here
    }

    // Leaflet map initialization code here
    
  }, []); // Empty dependency array ensures this effect runs only once

  const style = {
    fillColor: 'blue',
    weight: 2,
    opacity: 1,
    color: 'black',
    fillOpacity: 0.7,
  };
  const mapOptions = {
    maxZoom: 18, // Adjust the maxZoom according to your requirements
  };

  //const polygonBounds = GeoJSON.coordsToLatLngs(geoJsonData.geometry.coordinates[0]);
  
  return (
    <DynamicMapContainer center={[-6.158925, 106.7917869997]} zoom={18} style={{ height: '800px', width: '100%' }}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/petabencana/ckq0nc6hp01vw17p9n17yxue2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGV0YWJlbmNhbmEiLCJhIjoiY2s2MjF1cnZmMDlxdzNscWc5MGVoMTRkeCJ9.PGcoQqU6lBrcLfBmvTrWrQ"
      />
      {/* Add other map components here */}
      
      <GeoJSON data={geoJsonData } style={style} />
      
    </DynamicMapContainer>
  );
};

export default LeafletMap;
