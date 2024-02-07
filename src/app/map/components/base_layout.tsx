
'use client';
import React from 'react';
import LeafletMap from './LeafletMap';
import { json } from 'stream/consumers';
import { geoJSON } from 'leaflet';
import GeoJsonTable from './GeoJsonTable';
import style from './base_layout.module.css';
import  { useState,useEffect } from 'react';
import { convertTopoJSONToGeoJSON } from './ConvertToGeoJson';
import sampleGeoJsonData from '../topojson.json'
    
const MapPage = () => {

  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedVillage, setSelectedVillage] = useState<string>('');
  const [districtOptions, setDistrictOptions] = useState<string[]>([]);
  const [villageOptions, setVillageOptions] = useState<string[]>([]);
 
  const [isPolygonMarked, setIsPolygonMarked] = useState(true); 

// Function to convert TopoJSON to GeoJSON
const convertTopoJSON = (topoJSON:any) => {
  if (topoJSON && topoJSON.result && topoJSON.result.objects) {
    const geoJSON = convertTopoJSONToGeoJSON(sampleGeoJsonData);
    setSampleGeoJsonData(geoJSON);
    extractOptions(geoJSON);
    
  } 
};
const [geoJsonData, setSampleGeoJsonData] = useState<any>(geoJSON);
  // Function to extract unique district and village names from geoJsonData
  const extractOptions = (geoJsonData:any) => {
    if (geoJsonData && geoJsonData.result && geoJsonData.result.objects) {
    const districts = new Set<string>();
    const villages = new Set<string>();
    console.log("from use state",geoJsonData);
    geoJsonData.features.forEach((feature:any) => {
      districts.add(feature.properties.parent_name);
      villages.add(feature.properties.area_name);
    });
    
    setDistrictOptions(Array.from(districts) as string[]);
    setVillageOptions(Array.from(villages) as string[]);
  }else {
    console.error("Extract options :Invalid GeoJSON format:", geoJSON);
    // Handle the error or return early depending on your use case
  }
  };

  // Fetch data or update options when the component mounts
  useEffect(() => {
    
    if (sampleGeoJsonData) {
      convertTopoJSON(sampleGeoJsonData);//Converting topojson to geojson 
     
    }
  }, [sampleGeoJsonData]);

  
  // Update the selected district and village based on user selection
  const handleSelectChange = (e:any) => {
    const selectedValue = e.target.value;
    const [selectedDistrict, selectedVillage] = selectedValue.split('|');
    
    setSelectedDistrict(selectedDistrict);
    setSelectedVillage(selectedVillage);
  };

  

  const handleUpdateButtonClick = () => {
    // Toggle the polygon by updating geoJsonData
    const updatedGeoJsonData = {
      ...geoJsonData,
      features: geoJsonData.features.map((feature:any) => ({
        ...feature,
        properties: {
          ...feature.properties,
        },
        geometry: {
          ...feature.geometry,
        },
      })),
    };
    setSampleGeoJsonData(updatedGeoJsonData);
    setIsPolygonMarked((prevIsPolygonMarked) => !prevIsPolygonMarked);
   
  };

  return (
    <>
    <div>
    
      <LeafletMap geoJsonData={convertTopoJSONToGeoJSON(sampleGeoJsonData)} isPolygonMarked={isPolygonMarked} />
    </div>
    
    <div className={style.contentDiv}>
          
       
        {/* Modify the select element to handle district and village selection */}
        <select onChange={handleSelectChange} value={`${selectedDistrict}|${selectedVillage}`}>
          <option value="|">Select</option>
          
          {/* Use map to create options based on features */}
  { geoJsonData.features && geoJsonData.features.map((feature:any) => (
    <option key={feature.properties.area_id} value={`${feature.properties.parent_name}|${feature.properties.area_name}`}>
      {feature.properties.area_name} - {feature.properties.parent_name}
    </option>
  ))}
         
        </select>

         {/* Add a button to update the polygon */}
        <button onClick={handleUpdateButtonClick} className={style.updateBtn}>Update all floods</button>

        {sampleGeoJsonData && selectedVillage && (
          <GeoJsonTable geoJsonData={geoJsonData} district={selectedDistrict} village={selectedVillage} />
        )}
       
      </div>
    </>
  );
};

export default MapPage;
