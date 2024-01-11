// GeoJsonTable.js
'use client';
import React from 'react';
import { useTable } from 'react-table';
//import 'react-table/css/react-table.css';

const GeoJsonTable = ({ geoJsonData, district, village  }:any) => {
  console.log("GeoJsonTable Data:", geoJsonData);
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

 // const data = React.useMemo(() => features, [features]);
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
        {headerGroups.map((headerGroup:any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column:any) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row:any) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell:any) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
