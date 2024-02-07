// GeoJsonTable.js
'use client';
import React from 'react';
import { useTable } from 'react-table';


const GeoJsonTable = ({ geoJsonData, district, village  }:any) => {
 
  const features = geoJsonData?.features || [];
  // Filter features based on selected district and village
  const filteredFeatures = features.filter((feature:any) => {
    return (!district || feature.properties.parent_name === district) &&
           (!village || feature.properties.area_name === village);
  });


  const columns = React.useMemo(
    () => [
      {
        Header: 'Properties',
        columns: [
          { Header: 'Area ID', accessor: 'properties.area_id' },
          { Header: 'Geom ID', accessor: 'properties.geom_id' },
          { Header: 'Area Name', accessor: 'properties.area_name' },
          { Header: 'Parent Name', accessor: 'properties.parent_name' },
          { Header: 'City Name', accessor: 'properties.city_name' },
          { Header: 'State', accessor: 'properties.state' },
          { Header: 'Last Updated', accessor: 'properties.last_updated' },
        ],
      },
    ],
    []
  );


 const data = React.useMemo(() => filteredFeatures, [filteredFeatures]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="tableContainer">
    <table {...getTableProps()} style={{ width: '100%' }}>
      <thead>
        {headerGroups.map((headerGroup:any,index:number) => (
          <tr key={index}>
            {headerGroup.headers.map((column:any , index:number) => (
              <th  key={index}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row:any,index:number) => {
          prepareRow(row);
          return (
            <tr key={index}>
              {row.cells.map((cell:any,index:number) => (
                <td key={index}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default GeoJsonTable;
