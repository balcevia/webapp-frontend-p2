import React from 'react';
import {Table} from "react-bootstrap";

const TableComponent = ({headers, data}) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
      <tr>
        {headers.map((h, id) => <th key={`header${id}`} style={{verticalAlign: "middle"}}>{h.title}</th>)}
      </tr>
      </thead>
      <tbody>
      {data.map((d, id) => (
        <tr key={`table-row${id}`}>
          {headers.map((h, id) => <td key={`data-cell${id}`} style={{verticalAlign: "middle", textAlign: h.textAlign}}>{h.valueRenderer ? h.valueRenderer(d[h.key], d) : d[h.key]}</td>)}
        </tr>
      ))}
      </tbody>
    </Table>
  )
};

export default TableComponent;