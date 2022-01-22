import React from 'react' 
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import '../Pages/Pages.css'
import BasicModal from './Modal';



const Rows = [
    {id:1, name:'TenPlus Labs', last_name:'AJAPswenky', email:'05-01-2021', phone_number:'0', company_total_orders:'2021/05/05', active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'N200,000'},
    {id:2, name:'TenPlus Labs', last_name:'AJAPswenky', email:'05-01-2021', phone_number:'0', company_total_orders:'2021/05/05', active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'N200,000'},
    {id:3, name:'TenPlus Labs', last_name:'AJAPswenky', email:'05-01-2021', phone_number:'0', company_total_orders:'2021/05/05', active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'N200,000'},
    {id:4, name:'TenPlus Labs', last_name:'AJAPswenky', email:'05-01-2021', phone_number:'0', company_total_orders:'2021/05/05', active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'N200,000'},
    {id:5, name:'TenPlus Labs', last_name:'AJAPswenky', email:'05-01-2021', phone_number:'0', company_total_orders:'2021/05/05', active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'N200,000'},
    {id:6, name:'TenPlus Labs', last_name:'AJAPswenky', email:'05-01-2021', phone_number:'0', company_total_orders:'2021/05/05', active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'N200,000'}
]

const Table = (props) =>{
    const {id, name,last_name,email,phone_number,company_total_orders, active_orders, country, state, customer, wallet_amount, order_amount}  = props;
   
       return(        

        <tr>
            <td>{id}</td>
             <td className='page_title'> {name}
                <div className='d-flex display-none'>
                <button className='btn btn-secondary mt-3 mr-3'>Edit</button>
                <button className='btn btn-danger mt-3'>Delete</button>
                </div>
             </td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td>{phone_number}</td>
            <td>{company_total_orders}</td> 
            <td>{active_orders}</td>
            <td>{name}</td>
            <td>{country}</td>
            <td>{state}</td>
            <td>{customer}</td>
            <td>{wallet_amount}</td>
            <td>{order_amount}</td>
        </tr>
    )
    }
const ContactCustomer = (props) => {
   
    return (
        <main>
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-between mb-3'>
            <TabList className='col-md-5 d-flex justify-content-around ml-5'>
                <Tab><button className='btn active'>All(3)</button></Tab>
                <Tab><button className='btn'>Published(0)</button></Tab>
                <Tab><button className='btn active'>Draft(3)</button></Tab>
                <Tab><button className='btn'>Bin(0)</button></Tab>
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
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Company Total Order</th>
                                <th>Date Published</th>
                                <th>Name</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>C_Customer</th>
                                <th>Wallet Amount</th>
                                <th>Order Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} email={Row.email} phone_number={Row.phone_number} company_total_orders={Row.company_total_orders} last_name={Row.last_name} active_orders={Row.active_orders} name={Row.name} country={Row.country} state={Row.state} customer={Row.customer} wallet_amount={Row.wallet_amount} order_amount={Row.order_amount} />
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
    )
}

export default ContactCustomer
