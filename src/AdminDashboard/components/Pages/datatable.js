import './tableAsset/bootstrap.css'
import './tableAsset/app.css'
import React from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import records from './data.json';



function Datatable() {

    const columns = [
        {
            key: "name",
            text: "Name"
        },
        {
            key: "address",
            text: "Address"
        },
        {
            key: "postcode",
            text: "Postcode"
        },
        {
            key: "rating",
            text: "Rating"
        },
        {
            key: "type_of_food",
            text: "Type of Food"
        }
    ];


    const config = {
        page_size: 10,
        length_menu: [10, 20, 50],
        show_filter: true,
        show_pagination: true,
        button: {
            excel: true,
            print: true
        }
    }
  


  return(
  <section class="section" style={{height:'100vh',overflowY:'auto'}}>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
{/* 
        <div class="card">
            <div class="card-header">
                Simple Datatable
            </div>
            <div class="card-body">
                <table class="table table-striped" id="table1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Graiden</td>
                            <td>vehicula.aliquet@semconsequat.co.uk</td>
                            <td>076 4820 8838</td>
                            <td>Offenburg</td>
                            <td>
                                <span class="badge bg-success">Active</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Graiden</td>
                            <td>vehicula.aliquet@semconsequat.co.uk</td>
                            <td>076 4820 8838</td>
                            <td>Offenburg</td>
                            <td>
                                <span class="badge bg-success">Active</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Graiden</td>
                            <td>vehicula.aliquet@semconsequat.co.uk</td>
                            <td>076 4820 8838</td>
                            <td>Offenburg</td>
                            <td>
                                <span class="badge bg-success">Active</span>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div> */}

        <ReactDatatable
                config={config}
                records={records}
                columns={columns}/>

</section>


)

}

export default Datatable;
