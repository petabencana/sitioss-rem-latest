// pages/index.js
'use client';
import React from 'react';
import LeafletMap from './LeafletMap';
import { json } from 'stream/consumers';
import { geoJSON } from 'leaflet';
import GeoJsonTable from './GeoJsonTable';
import style from './base_layout.module.css';
import  { useState,useEffect } from 'react';
/* NewYork
const sampleGeoJsonData={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-74.006, 40.7128],
            [-73.979, 40.7128],
            [-73.979, 40.731],
            [-74.006, 40.731],
            [-74.006, 40.7128]
          ]
        ]
      },
      "properties": {
        "name": "Sample Polygon"
      }
    }
  ]
}
*//*
const sampleGeoJsonData = {
  "statusCode": 200,
  "result": {
    "type": "Feature",
    //"type": "Topology",
    "objects": {
      "output": {
        "type": "GeometryCollection",
        "geometries": [
          {
            "type": "Polygon",
            "properties": {
              "area_id": "5",
              "geom_id": "3174040004009000",
              "area_name": "RW 09",
              "parent_name": "GROGOL",
              "city_name": "Jakarta",
              "state": 1,
              "last_updated": "2016-12-19T13:53:52.274Z"
            },
            "arcs": [
              [
                0
              ]
            ]
          }
        ]
      }
    },
    "arcs": [
      [
        [
          9999,
          7847
        ],
        [
          -507,
          -6
        ],
        [
          -695,
          -70
        ],
        [
          -317,
          -221
        ],
        [
          -761,
          -18
        ],
        [
          -516,
          98
        ],
        [
          -641,
          -61
        ],
        [
          -649,
          -119
        ],
        [
          -169,
          -762
        ],
        [
          -181,
          -519
        ],
        [
          48,
          -602
        ],
        [
          -130,
          -162
        ],
        [
          64,
          -1235
        ],
        [
          81,
          -2351
        ],
        [
          136,
          -1098
        ],
        [
          15,
          -675
        ],
        [
          -1250,
          -40
        ],
        [
          -879,
          -6
        ],
        [
          -924,
          217
        ],
        [
          -924,
          425
        ],
        [
          -1800,
          138
        ],
        [
          830,
          1540
        ],
        [
          565,
          1455
        ],
        [
          764,
          1975
        ],
        [
          1018,
          2079
        ],
        [
          384,
          788
        ],
        [
          389,
          1061
        ],
        [
          1398,
          -76
        ],
        [
          296,
          -25
        ],
        [
          360,
          6
        ],
        [
          392,
          -9
        ],
        [
          360,
          -9
        ],
        [
          377,
          12
        ],
        [
          323,
          25
        ],
        [
          354,
          76
        ],
        [
          296,
          89
        ],
        [
          211,
          42
        ],
        [
          290,
          52
        ],
        [
          217,
          28
        ],
        [
          341,
          110
        ],
        [
          43,
          -67
        ],
        [
          57,
          -174
        ],
        [
          109,
          -159
        ],
        [
          154,
          -257
        ],
        [
          115,
          -370
        ],
        [
          99,
          -346
        ],
        [
          124,
          -357
        ],
        [
          133,
          -422
        ]
      ]
    ],
    "transform": {
      "scale": [
        0.0000003311331833192323,
        0.00000032713269326930546
      ],
      "translate": [
        106.7917869997,
        -6.158925
      ]
    },
    "bbox": [
      106.7917869997,
      -6.158925,
      106.7950980004,
      -6.1556540002
    ]
  }};*/
const sampleGeoJsonData:any={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [106.7928889, -6.1510772],
            [106.7923812, -6.1510833],
            [106.792105, -6.1511539],
            // ... (other coordinates)
            [106.7928889, -6.1510772]
          ]
        ]
      },
      "properties": {
        "area_id": "5",
        "geom_id": "3174040004009000",
        "area_name": "RW 09",
        "parent_name": "GROGOL",
        "city_name": "Jakarta",
        "state": 1,
        "last_updated": "2016-12-19T13:53:52.274Z"
      }
    }
  ],
  "bbox": [
    106.7917869997,
    -6.158925,
    106.7950980004,
    -6.1556540002
  ]
}

const MapPage = () => {

  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedVillage, setSelectedVillage] = useState<string>('');
  const [districtOptions, setDistrictOptions] = useState<string[]>([]);
  const [villageOptions, setVillageOptions] = useState<string[]>([]);
  const [geoJsonData, setSampleGeoJsonData] = useState<any>(sampleGeoJsonData);

  // Function to extract unique district and village names from geoJsonData
  const extractOptions = (sampleGeoJsonData:any) => {
    const districts = new Set<string>();
    const villages = new Set<string>();

    sampleGeoJsonData.features.forEach((feature:any) => {
      districts.add(feature.properties.parent_name);
      villages.add(feature.properties.area_name);
    });

    setDistrictOptions(Array.from(districts) as string[]);
    setVillageOptions(Array.from(villages) as string[]);
  };

  // Fetch data or update options when the component mounts
  useEffect(() => {
    // Fetch your geoJsonData or use the existing sampleGeoJsonData
    // For demonstration, using the existing sampleGeoJsonData
    setSampleGeoJsonData(sampleGeoJsonData);
    extractOptions(sampleGeoJsonData);
  }, []);

  
  // Update the selected district and village based on user selection
  const handleSelectChange = (e:any) => {
    const selectedValue = e.target.value;
    const [selectedDistrict, selectedVillage] = selectedValue.split('|');
    
    setSelectedDistrict(selectedDistrict);
    setSelectedVillage(selectedVillage);
  };
  return (
    <>
    <div>
    
      <LeafletMap geoJsonData={sampleGeoJsonData} />
    </div>
    
    <div className={style.contentDiv}>
          
        {/*<select><option>City Name</option></select>
        
          <GeoJsonTable geoJsonData={sampleGeoJsonData} /> Table displaying data of the polygon marked*/}


        {/* Modify the select element to handle district and village selection */}
        <select onChange={handleSelectChange} value={`${selectedDistrict}|${selectedVillage}`}>
          <option value="|">Select</option>
          <option value="GROGOL|RW 09">GROGOL - RW 09</option>
          {/* Add more options based on your data */}
        </select>
        {sampleGeoJsonData && selectedVillage && (
          <GeoJsonTable geoJsonData={sampleGeoJsonData} district={selectedDistrict} village={selectedVillage} />
        )}
        {/* Pass the selectedDistrict and selectedVillage to GeoJsonTable
        {selectedVillage && <GeoJsonTable district={selectedDistrict} village={selectedVillage} />} */}
      </div>
    </>
  );
};

export default MapPage;
