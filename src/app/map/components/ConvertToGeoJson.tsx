//ConvertToGeoJson.tsx
import { feature } from 'topojson-client';

export const convertTopoJSONToGeoJSON = (topoJSON:any) => {

    if (topoJSON.result.objects.output) {
        const geoJSON = feature(topoJSON.result, topoJSON.result.objects.output);
       
        return geoJSON;
      } else {
        console.error("Invalid TopoJSON format:", topoJSON);
        return null; // Return some default value or handle the error accordingly
      }
 
};
