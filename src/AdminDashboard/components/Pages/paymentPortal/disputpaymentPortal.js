import React from 'react' 
import {  TabPanel, Tabs } from 'react-tabs';
import Navbar from '../../Navbar/Navbar';
import '../Pages/Pages.css'
import { AddNewPayment } from './modal';



const Rows = [
    {id:1, page_title:'TenPlus Labs', coupon_number: '2020202020', page_url:'AJAPswenky', date_published:'05-01-2021', status:'expired   ', exp_date:'2021/05/05', visit_day:'New', visit_today:'5', visit_month:'2' },
    {id:2, page_title:'TenPlus Labs', coupon_number: '2020202020', page_url:'AJAPswenky', date_published:'05-01-2021', status:'active', exp_date:'2021/05/05', visit_day:'Existing', visit_today:'5', visit_month:'2' },
    {id:3, page_title:'TenPlus Labs', coupon_number: '2020202020', page_url:'AJAPswenky', date_published:'05-01-2021', status:'expired', exp_date:'2021/05/05', visit_day:'Both', visit_today:'5', visit_month:'2' },
    {id:4, page_title:'TenPlus Labs', coupon_number: '2020202020', page_url:'AJAPswenky', date_published:'05-01-2021', status:'active', exp_date:'2021/05/05', visit_day:'New', visit_today:'5', visit_month:'2' },
    {id:5, page_title:'TenPlus Labs', coupon_number: '2020202020', page_url:'AJAPswenky', date_published:'05-01-2021', status:'expired', exp_date:'2021/05/05', visit_day:'Existing', visit_today:'5', visit_month:'2' },
    {id:6, page_title:'TenPlu Lab', coupon_number: '2020202020', page_url:'AJAPswenky', date_published:'05-01-2021', status:'active', exp_date:'2021/05/05', visit_day:'Both', visit_today:'5', visit_month:'2' }
]

const Table = (props) =>{
    const {id, page_title,page_url,date_published,status,exp_date, visit_today, visit_day, coupon_number  }  = props;

    return(        

        <tr>
            <td>{id}</td>
            <td>{page_title}</td>
            <td className='page_title'> 
                {date_published}
             </td>
             <td className='page_title'> 
                {visit_today} 
             </td>
             <td className='page_title'> 
                {page_url}
             </td>
             <td>{coupon_number}</td>
            <td>{status}</td>
            <td className='page_title'> 
                {exp_date}
             </td>
            <td className='page_title'> 
                {visit_day} 
             </td>
            <td className='page_title  cusuor-pointer'> 
                <div className='d-flex'>
                {/* <EcommercePaymentModal /> */}
                </div>
             </td>
        </tr>
    )
    }
const DisputesPortalPayments = (props) => {
   
    return (
        <main>
        <Navbar pg_name='Dispute Payment'/>
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-right mb-3'>
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
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} coupon_number={Row.coupon_number} page_title={Row.page_title} date_published={Row.date_published} status={Row.status} exp_date={Row.exp_date} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} />
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

export default DisputesPortalPayments
