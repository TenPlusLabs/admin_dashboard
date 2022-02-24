import { Add, CardTravelTwoTone, Chat, Edit, Settings, ShoppingBag, Task } from '@mui/icons-material';
import React from 'react'
import { TabList, Tabs } from 'react-tabs';
import Navbar from '../../Navbar/Navbar';
import '../Pages/Pages.css'
import  { AddMilestoneModal, AddTaskModal, BillingModal, EditOrderModal, ShippingModal } from './Modal';
import img from '../../../../assets/lana.jpg'
import { Button } from '@mui/material';



const Rows = [
    {id:1, page_title:'TenPlus Labs',progress:'25%', page_url:'AJAPswenky',milestone:'testing', classColor:'danger', status:'new', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2'},
    {id:2, page_title:'TenPlus Labs',progress:'15%', page_url:'AJAPswenky',milestone:'development',classColor:'secondary', status:'completed', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:3, page_title:'TenPlus Labs',progress:'10%', page_url:'AJAPswenky',milestone:'wireframe',classColor:'primary', status:'assigned', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:4, page_title:'TenPlus Labs',progress:'80%', page_url:'AJAPswenky',milestone:'launch',classColor:'success', status:'new', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:5, page_title:'TenPlus Labs',progress:'20%', page_url:'AJAPswenky',milestone:'testing',classColor:'danger', status:'assigned', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:6, page_title:'TenPlu Lab',progress:'90%', page_url:'AJAPswenky',milestone:'launch',classColor:'success', status:'ongoing', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' }
]

const Table = (props) =>{
    const {id,page_url,date_published,progress,date_description, visit_today,visit_day} = props;

    return(        

        <tr>
            <td>
                <EditOrderModal />
            </td>
            <td>{id}</td>
            <td>{page_url}</td>
            <td>{date_published}</td>
            <td>{date_description}</td>
            <td>{progress}</td> 
            <td>{visit_today}</td>
            <td>{visit_day}</td>
                {/* <td>
                    <span className={`badge badge-${classColor}`}>{milestone}</span>
                </td> */}
        </tr>
    )
}

const TaskTable = (props) =>{
    const {id,page_url,milestone,status,classColor, meta_data,progress, visit_day, }  = props;

    return(        

        <tr>
             <td>
                <EditOrderModal />
            </td>
            <td>{id}</td>
            <td>{page_url}</td>
            <td>Yusuf Doe</td>
            <td>
                <span className={`badge badge-info`}>{status}</span>
            </td>
            <td>
                <span className={`badge badge-${classColor}`}>{milestone}</span>
            </td>
            <td>{progress}</td>
            <td>{visit_day}</td>
            <td>{meta_data}</td>
        </tr>
    )
    }



function ViewProject() {
  return (
    <div>
       <main>
        <Navbar pg_name='Project / View' />
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-center mb-3'>
            <TabList className='col-md-5 d-flex justify-content-around ml-5'>
            </TabList>
        </div>

            <div>
                <div className='row'>
                    <h3 className='col-8'><CardTravelTwoTone/> Order</h3>
                    <span className='col-4' style={{float:'right'}}>
                        &nbsp;&nbsp;
                        <Button className=""  variant="outlined"  startIcon={<Chat />}>Chat</Button>
                        &nbsp;&nbsp;
                        <Button className=""  variant="outlined"  startIcon={<Edit />}>Augment Budget</Button>
                    </span>
                </div>
                <hr />
                <div class="container bg-light shadow p-5">
                    <div class="row">
                        <div class="col-sm">
                            <h4 className=''>General</h4>
                            <br/>
                            <div>
                                <label>
                                    <span>Date added:</span>
                                    <input type='datetime-local' className='form-control' style={{width:'230px'}}/>
                                </label>
                                <br />
                                <label>
                                    <span>Status:</span>
                                    <select className='form-control' style={{width:'230px'}}>
                                        <option>Ongoing</option>
                                        <option>Pending</option>
                                        <option>Completed</option>
                                    </select>
                                </label>
                                <br />
                                <label>
                                    <span>Customer Name:</span>
                                    <input type='text' className='form-control' style={{width:'230px'}}/>
                                </label>
                                <br />
                                <label>
                                    <span>Assigned To:</span>
                                    <select className='form-control' style={{width:'230px'}}>
                                        <option>Some guy</option>
                                        <option>Some guy</option>
                                        <option>Some guy</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm">
                            <span className='d-flex justify-content-between'>
                                <h4>Billing </h4> 
                                <BillingModal />
                            </span>
                            <div>
                                <div className='mt-4'>Jack Mike</div>
                                <div className='mt-2'>Barnsely </div>
                                <div className='mt-2'>Barnoldswick</div>
                                <div className='mt-2'>North Yorkshire</div>
                                <div className='mt-2'>
                                    AB1 OOA,
                                    <br/>
                                    United Kingdom
                                </div>
                                <div className='mt-2'>
                                    Email address,
                                    <br/>
                                    <span className='text-primary cursor-pointer'>gmail@gmail.com</span>
                                </div>
                                <div className='mt-2'>
                                    Phone,
                                    <br/>
                                    <span className='text-primary cursor-pointer'>+234 091 252 593</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <span className='d-flex justify-content-between'>
                                <h4>Shipping </h4> <ShippingModal/>
                            </span>
                            <div>
                                <div className='mt-4'>Jack Mike</div>
                                <div className='mt-2'>Barnsely </div>
                                <div className='mt-2'>Barnoldswick</div>
                                <div className='mt-2'>North Yorkshire</div>
                                <div className='mt-2'>
                                    AB1 OOA,
                                    <br/>
                                    United Kingdom
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/><br/>


            <div>
                <h3><ShoppingBag /> Items</h3>
                <hr />
                <div class="container bg-light shadow p-5">
                    <div class="row">
                        <div className='row'>
                            <div class="col-9 mb-3">
                                <b>Image</b>
                            </div>
                            <div class="col-1">
                            <b>Cost</b>
                            </div>
                            <div class="col-1">
                                <b>Qty</b>
                            </div>
                            <div class="col-1">
                            <b>Total</b>
                            </div>
                        </div>
                    </div>
                        <hr />
                        <div class="" style={{maxHeight:'500px',overflowY:'scroll',width:'100%',overflowX:'hidden',position:'sticky'}}>
                            <div className='row mb-3 d-flex align-items-center'>
                                <div class="col-9">
                                    <img src={img} alt='item_img' height='80'/>
                                </div>
                                <div class="col-1">
                                    $200,00
                                </div>
                                <div class="col-1">
                                    2
                                </div>
                                <div class="col-1">
                                    $400,000
                                </div>
                            </div>
                            <hr />
                            <div className='row mb-3 d-flex align-items-center'>
                                <div class="col-9">
                                    <img src={img} alt='item_img' height='80'/>
                                </div>
                                <div class="col-1">
                                    $100,00
                                </div>
                                <div class="col-1">
                                    1
                                </div>
                                <div class="col-1">
                                    $100,00
                                </div>
                            </div>

                            <hr />
                            <div className='row mb-3 d-flex align-items-center'>
                                <div class="col-9">
                                    <img src={img} alt='item_img' height='80'/>
                                </div>
                                <div class="col-1">
                                    $300,00
                                </div>
                                <div class="col-1">
                                    4
                                </div>
                                <div class="col-1">
                                    $12,000,00
                                </div>
                            </div>

                            <hr />
                            <div className='row mb-3 d-flex align-items-center'>
                                <div class="col-9">
                                    <img src={img} alt='item_img' height='80'/>
                                </div>
                                <div class="col-1">
                                    $50,000
                                </div>
                                <div class="col-1">
                                    3
                                </div>
                                <div class="col-1">
                                    $150,000
                                </div>
                            </div>
                            <hr />
                            
                            <div className='row mb-3 d-flex align-items-center'>
                                <div class="col-9">
                                    <img src={img} alt='item_img' height='80'/>
                                </div>
                                <div class="col-1">
                                    $50,000
                                </div>
                                <div class="col-1">
                                    3
                                </div>
                                <div class="col-1">
                                    $150,000
                                </div>
                            </div>
                            <hr />
                    </div>
                </div>
            </div>

            <br/><br/>

            <div>
                
                    <div className='col-12'>
                        <div className='row'>
                            <span className='col-10'>
                                <h3><Settings/> Milestone</h3>
                            </span>
                            <span className='col-2'>
                                <h3>
                                    <AddMilestoneModal />
                                </h3>
                            </span>
                        </div>
                        <hr />
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>ID</th>
                                <th>Milestone</th>
                                <th>Assigned To</th>
                                <th>Task</th>
                                <th>Progress</th>
                                <th>Start Date</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} milestone={Row.milestone} progress={Row.progress} status={Row.status} classColor={Row.classColor} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} />
                    )} 
                        </tbody>
                    </table>
                    </div>   
        </div>
        <br /><br />
        <div>
                
                <div className='col-12'>
                        <div className='row'>
                            <span className='col-10'>
                            <h3> <Task /> Tasks</h3>
                            </span>
                            <span className='col-2'>
                                <h3>
                                    <AddTaskModal />
                                </h3>
                            </span>
                        </div>
                <hr />
                <table className=' bg-light p-5 shadow text-blue table-responsive'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Title </th>
                            <th>Assigned To</th>
                            <th>Status</th>
                            <th>Progress</th>
                            <th>Milestone</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Rows.map((Row) =>
                <TaskTable key={Row.id} id={Row.id} milestone={Row.milestone} progress={Row.progress} status={Row.status} classColor={Row.classColor} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} />
                )} 
                    </tbody>
                </table>
                </div>
        
    </div>
    </Tabs>
    </div>
            </div>   
        </main>
    </div>
  )
}

export default ViewProject