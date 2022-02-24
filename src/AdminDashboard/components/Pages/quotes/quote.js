// import React, {useState} from 'react' 
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import Navbar from '../../Navbar/Navbar';
import '../Pages/Pages.css'
import BasicModal, { EditQuoteModal } from './Modal';



const Rows = [
    {id:1, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',type:'Full Payment' },
    {id:2, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',type:'Milestone Payment' },
    {id:3, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',type:'Refund Payment'  },
    {id:4, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',type:'Augmented Payment' },
    {id:5, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',type:'Refund Payment'  },
    {id:6, page_title:'TenPlu Lab', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',type:'Augumented Payment' }
]
const fullPayment = Rows.filter(val => val.type === 'Full Payment')
const refundPayment = Rows.filter(val => val.type === 'Refund Payment')
const augumentedPayment = Rows.filter(val => val.type === 'Augumented Payment')
const milestonePayment = Rows.filter(val => val.type === 'Milestone Payment')

const Table = (props) =>{
    const {id, page_title,page_url,date_published,date_description,meta_data, visit_today, visit_day, visit_month,p_type}  = props;
   
    // const [openModal, setOpenModal] = useState('');
    // const handleShow = () => {
    //     return <BasicModal />
    //   };

    return(        

        <tr>
            <td>{id}</td>
            <td className='page_title' style={{width:'150px'}}> {page_title}
                <div className='d-flex display-none'>
                <EditQuoteModal />
                <span className='text-danger mt-3'>Delete</span>
                </div>
             </td>
             <td>{p_type}</td>
            <td>{page_url}</td>
            <td>{date_published}</td>
            <td>{date_description}</td>
            <td>{meta_data}</td> 
            <td>{visit_today}</td>
            <td>{visit_day}</td>
            <td>{visit_month}</td>
        </tr>
    )
    }
const Quote = (props) => {
   
    return (
        <main>
            <Navbar pg_name='Quote' />
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-between mb-3'>
            <TabList className='col-md-5 d-flex justify-content-around ml-5'>
                <Tab><button className='btn active'>All({Rows.length})</button></Tab>
                <Tab><button className='btn'>Full Payment({fullPayment.length})</button></Tab>
                <Tab><button className='btn active'>Refund Payment({refundPayment.length})</button></Tab>
                <Tab><button className='btn'>Augumented Payment({augumentedPayment.length})</button></Tab>
                <Tab><button className='btn'>Milestone Payment({milestonePayment.length})</button></Tab>
                {/* <Tab><BasicModal /></Tab> */}
                {/* <BasicModal /> */}
            </TabList>
            <div className='margin'> <BasicModal /> </div>
        </div>
            <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>

                                <th>ID</th>
                                <th>Qoute Number</th>
                                <th>Qoute Type</th>
                                <th>Milestone 
                                    {/* (Payment, Augmented Payment, Refund) */}
                                </th>
                                <th>Product Name</th>
                                <th>Category Name</th>
                                <th>Sub Category Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Phone No.</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>
                                Channel 
                                {/* (PayPal, Paystack, 
                                Manual */}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} p_type={Row.type} />
                    )} 
                        </tbody>
                    </table>
                    </div>
            
        </TabPanel>
        <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>

                                <th>ID</th>
                                <th>Qoute Number</th>
                                <th>Qoute Type</th>
                                <th>Milestone 
                                    {/* (Payment, Augmented Payment, Refund) */}
                                </th>
                                <th>Product Name</th>
                                <th>Category Name</th>
                                <th>Sub Category Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Phone No.</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>
                                Channel 
                                {/* (PayPal, Paystack, 
                                Manual */}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {fullPayment.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} p_type={Row.type} />
                    )} 
                        </tbody>
                    </table>
                    </div>
            
        </TabPanel>

        <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>

                                <th>ID</th>
                                <th>Qoute Number</th>
                                <th>Qoute Type</th>
                                <th>Milestone 
                                    {/* (Payment, Augmented Payment, Refund) */}
                                </th>
                                <th>Product Name</th>
                                <th>Category Name</th>
                                <th>Sub Category Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Phone No.</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>
                                Channel 
                                {/* (PayPal, Paystack, 
                                Manual */}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {refundPayment.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} p_type={Row.type} />
                    )} 
                        </tbody>
                    </table>
                    </div>
            
        </TabPanel>

        <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>

                                <th>ID</th>
                                <th>Qoute Number</th>
                                <th>Qoute Type</th>
                                <th>Milestone 
                                    {/* (Payment, Augmented Payment, Refund) */}
                                </th>
                                <th>Product Name</th>
                                <th>Category Name</th>
                                <th>Sub Category Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Phone No.</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>
                                Channel 
                                {/* (PayPal, Paystack, 
                                Manual */}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {augumentedPayment.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} p_type={Row.type} />
                    )} 
                        </tbody>
                    </table>
                    </div>
            
        </TabPanel>

        <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>

                                <th>ID</th>
                                <th>Qoute Number</th>
                                <th>Qoute Type</th>
                                <th>Milestone 
                                    {/* (Payment, Augmented Payment, Refund) */}
                                </th>
                                <th>Product Name</th>
                                <th>Category Name</th>
                                <th>Sub Category Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Phone No.</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>
                                Channel 
                                {/* (PayPal, Paystack, 
                                Manual */}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {milestonePayment.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} p_type={Row.type} />
                    )} 
                        </tbody>
                    </table>
                    </div>
            
        </TabPanel>
    </Tabs>
    </div>
            </div>   
        </main>
    )
}

export default Quote
