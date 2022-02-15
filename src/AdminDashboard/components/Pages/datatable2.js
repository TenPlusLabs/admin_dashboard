import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = (props) => {

  const {mine} = props

  const data = {
    columns: [
      {
        label: 'File',
        field: 'file',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Upload',
        field: 'upload',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Comment',
        field: 'comment',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Comment Body',
        field: 'commentBody',
        sort: 'asc',
        width: 150
      },
    ],
     rows:mine  
  };

  return (
    <>
      <br/>
      <br/>
      <br/>
          <MDBDataTable
            striped
            hover
            data={data}
            />
            {console.log(mine)}
    </>
  );
}

export default DatatablePage;