import React from 'react' 
import {  TabPanel,Tabs } from 'react-tabs';
import Navbar from '../../Navbar/Navbar';
import '../Pages/Pages.css'
import { AddNewPayment, PortalViewModal } from './modal';




const Rows = [
    {id:1, page_title:'TenPlus Labs', price: '#2000', page_url:'AJAPswenky', start_date:'05-01-2021', date_description:'0', end_date:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:2, page_title:'TenPlus Labs', price: '#2000', page_url:'AJAPswenky', start_date:'05-01-2021', date_description:'0', end_date:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:3, page_title:'TenPlus Labs', price: '#2000', page_url:'AJAPswenky', start_date:'05-01-2021', date_description:'0', end_date:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:4, page_title:'TenPlus Labs', price: '#2000', page_url:'AJAPswenky', start_date:'05-01-2021', date_description:'0', end_date:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:5, page_title:'TenPlus Labs', price: '#2000', page_url:'AJAPswenky', start_date:'05-01-2021', date_description:'0', end_date:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:6, page_title:'TenPlu Lab', price: '#2000', page_url:'AJAPswenky', start_date:'05-01-2021', date_description:'0', end_date:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' }
]

const Table = (props) =>{
    const {id, page_title,page_url,start_date,end_date,price, visit_today, visit_day, visit_month  }  = props;
   
    // const [openModal, setOpenModal] = useState('');
    // const handleShow = () => {
    //     return <BasicModal />
    //   };

    return(        

        <tr>
            <td>{id}</td>
            <td className='page_title' style={{width:'150px'}}> {page_title}
                <div className='d-flex display-none'>
                <span className='text-secondary mt-3 mr-3'>Edit</span><span className='text-danger mt-3'>Delete</span>
                </div>
             </td>
            <td>{page_url}</td>
            <td>{price}</td>
            <td>{start_date}</td>
            <td>{end_date}</td> 
            <td>{visit_today}</td>
            <td>{visit_day}</td>
            <td>{visit_month}</td>
            <td className='page_title  cusuor-pointer'> 
                <div className='d-flex'>
                <PortalViewModal />
                </div>
             </td>
        </tr>
    )
    }


const PaymentPortal = (props) => {
   
    return (
        <main>
            <Navbar pg_name='Payment Portal'/>
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-left mb-3'>
            <div className='margin'> <AddNewPayment /> </div>
        </div>
            <TabPanel>
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Program Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                                <th>Total Payments(#2000)</th>
                                <th>Total Applicants(30)</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                        <Table key={Row.id} id={Row.id} coupon_number={Row.coupon_number}  price={Row.price} page_title={Row.page_title} start_date={Row.start_date} end_date={Row.end_date} date_published={Row.date_published} status={Row.status} exp_date={Row.exp_date} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} />
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

export default PaymentPortal
