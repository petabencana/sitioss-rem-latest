

'use client';
// LeafletMap.tsx
/*
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css"; 

mapboxgl.accessToken = 'pk.eyJ1IjoicGV0YWJlbmNhbmEiLCJhIjoiY2s2MjF1cnZmMDlxdzNscWc5MGVoMTRkeCJ9.PGcoQqU6lBrcLfBmvTrWrQ';
https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGV0YWJlbmNhbmEiLCJhIjoiY2s2MjF1cnZmMDlxdzNscWc5MGVoMTRkeCJ9.PGcoQqU6lBrcLfBmvTrWrQ
const LeafletMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.mapbox.com/styles/v1/mapbox/streets-v11?access_token=YOUR_MAPBOX_ACCESS_TOKEN',
          { mode: 'no-cors' }
        );
        const style = await response.json();
        console.log('Style:', style);  // Log the style object

        const map = new mapboxgl.Map({
          container: mapContainer.current!,
          style: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11?access_token=YOUR_MAPBOX_ACCESS_TOKEN',
          center: [-74.5, 40],
          zoom: 9,
        });

        // Add a custom tileset as a layer
        map.on('load', () => {
            map.addLayer({
              id: 'custom-tileset',
              type: 'raster',
              source: {
                type: 'raster',
                tiles: ['https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGV0YWJlbmNhbmEiLCJhIjoiY2s2MjF1cnZmMDlxdzNscWc5MGVoMTRkeCJ9.PGcoQqU6lBrcLfBmvTrWrQ'], // Replace with your custom tileset URL
                tileSize: 256,
              },
              paint: {},
            });
          });
          console.log('Map:', map);  // Log the map object
        return () => {
          map.remove();
        };
      } catch (error) {
        console.error('Error fetching map style:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount

  return <div ref={mapContainer} style={{ height: '400px', width: '100%' }} />;
};

export default LeafletMap;




// components/LeafletMap.js
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  // Example coordinates for a marker
  const position = [51.505, -0.09];
    
  return (
    <MapContainer style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/petabencana/ckq0nc6hp01vw17p9n17yxue2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGV0YWJlbmNhbmEiLCJhIjoiY2s2MjF1cnZmMDlxdzNscWc5MGVoMTRkeCJ9.PGcoQqU6lBrcLfBmvTrWrQ"
      
      />
      <Marker position={position}>
        <Popup>
          A sample marker on the map. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
  
};

export default LeafletMap;
*/

import React, { useEffect } from 'react';
import { MapContainer, Marker, TileLayer,GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

//import LeafletMapWithPolygon from 'react-leaflet';
import {GeoJsonObject } from 'geojson';

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
    <MapContainer center={[-6.158925, 106.7917869997]} zoom={18} style={{ height: '800px', width: '100%' }}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/petabencana/ckq0nc6hp01vw17p9n17yxue2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGV0YWJlbmNhbmEiLCJhIjoiY2s2MjF1cnZmMDlxdzNscWc5MGVoMTRkeCJ9.PGcoQqU6lBrcLfBmvTrWrQ"
      />
      {/* Add other map components here */}
      
      <GeoJSON data={geoJsonData } style={style} />
      
    </MapContainer>
  );
};

export default LeafletMap;
