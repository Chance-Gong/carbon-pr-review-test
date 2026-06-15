import React from 'react';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@carbon/react';

// ISSUE: Not using Carbon's DataTable properly
// ISSUE: Missing accessibility attributes
// ISSUE: Incorrect Carbon component usage
const CustomDataTable = ({ data }) => {
  return (
    <div>
      {/* ISSUE: Using native table instead of Carbon DataTable pattern */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* ISSUE: Incorrect DataTable implementation - missing required props */}
      <DataTable rows={data}>
        {({ rows, headers, getTableProps }) => (
          <TableContainer>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {/* ISSUE: Missing proper header configuration */}
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Email</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    {/* ISSUE: Not using getRowProps or getCellProps */}
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </div>
  );
};

export default CustomDataTable;

// Made with Bob
