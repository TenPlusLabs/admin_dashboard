import React from 'react'
import { TabList, TabPanel, Tabs } from 'react-tabs';
import Navbar from '../../Navbar/Navbar';
import '../Pages/Pages.css'
import BasicModal from './Modal';





const Rows = [
    {id:1, page_title:'TenPlus Labs', page_url:'AJAPswenky',milestone:'testing', classColor:'danger', status:'new', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2'},
    {id:2, page_title:'TenPlus Labs', page_url:'AJAPswenky',milestone:'development',classColor:'secondary', status:'completed', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:3, page_title:'TenPlus Labs', page_url:'AJAPswenky',milestone:'wireframe',classColor:'primary', status:'assigned', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:4, page_title:'TenPlus Labs', page_url:'AJAPswenky',milestone:'launch',classColor:'success', status:'new', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:5, page_title:'TenPlus Labs', page_url:'AJAPswenky',milestone:'testing',classColor:'danger', status:'assigned', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:6, page_title:'TenPlu Lab', page_url:'AJAPswenky',milestone:'launch',classColor:'success', status:'ongoing', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' }
]

const Table = (props) =>{
    const {id, page_title,page_url,date_published,milestone,date_description,status,classColor,meta_data, visit_today, visit_day, visit_month  }  = props;

    return(        

        <tr>
            <td>{id}</td>
            <td>{page_url}</td>
            <td>{date_published}</td>
            <td>{date_description}</td>
            <td>{meta_data}</td> 
            <td>{visit_today}</td>
            <td>{visit_day}</td>
            <td>
                <span className={`badge badge-${classColor}`}>{milestone}</span>
            </td>
            <td>{visit_month}</td>
            <td>yo</td>
            <td>fbok</td>
            <td>
                <span>{status}</span>
            </td>
        </tr>
    )
    }

function ViewProject() {
  return (
    <div>
       <main>
        <Navbar pg_name='Project / Order' />
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-center mb-3'>
            <TabList className='col-md-5 d-flex justify-content-around ml-5'>
            </TabList>
        </div>
            <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Project Name</th>
                                <th>Order Number</th>
                                <th>Date</th>
                                <th>Category Name</th>
                                <th>Product Name</th>
                                <th>Assigned to</th>
                                <th>Assigned by</th>
                                <th>Milestone</th>
                                <th>Price</th>
                                <th>In stock ({Rows.length  })</th>
                                <th>Total Orders</th>
                                <th>Status </th>
                                <th>Due Date</th>
                                <th>Customer Name</th>
                                <th>Company</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>
                                    Source
                                    {/* Source [This 
                                    displays; Manual (+ name of 
                                    user that added it) */}
                                </th>
                                <th>Store</th>
                                <th>
                                    Affilate Store
                                    {/* Affiliate Store (+ name of 
                                    link), or ChatBot], */}
                                </th>
                                <th>Price</th>
                                <th>
                                Price History
                                 {/* (shows amount and date) */}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} milestone={Row.milestone} status={Row.status} classColor={Row.classColor} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} />
                    )} 
                        </tbody>
                    </table>
                    </div>
            
        </TabPanel>
        <TabPanel>
        </TabPanel>
    </Tabs>
    </div>
            </div>   
        </main>
    </div>
  )
}

export default ViewProject