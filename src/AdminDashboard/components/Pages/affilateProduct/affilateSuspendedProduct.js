import React from 'react' 
import { TabPanel,Tabs } from 'react-tabs';
import '../Pages/Pages.css'
// import BasicModal from './Modal';



const Rows = [
    {id:1, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',education:'BSC' },
    {id:2, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',education:'BSC' },
    {id:3, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',education:'MSC' },
    {id:4, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',education:'MSC' },
    {id:5, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',education:'BSC' },
    {id:6, page_title:'TenPlu Lab', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2',education:'MSC' }
]

const Table = (props) =>{
    const {id,page_title,page_url,date_published,date_description,meta_data, visit_today, visit_day, visit_month,education,color,text }  = props;
   
    return(        

        <tr>
            <td>{id}</td>
            <td>{page_url}</td>
            <td>{date_published}</td>
            <td>{date_description}</td>
            <td>{meta_data}</td> 
            <td>{visit_today}</td>
            <td>{visit_day}</td>
            <td>{visit_month}</td>
            <td>{education}</td>
            <td>{page_title}</td>
            <td>7</td>
            <td>23500</td>
            <td>34444</td>
            <span className={`btn btn-${color} mt-3 mr-3`}>{text}</span>
        </tr>
    )
    }
const AffilateSuspendedProduct = (props) => {
   
    return (
        <main>
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-between mb-3'>
            
        </div>
        <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Product Url</th>
                                <th>Category Name</th>
                                <th>Sub Category Name</th>
                                <th>Total Orders</th>
                                <th>Date Description</th>
                                <th>Price</th>
                                <th>Latest Order</th>
                                <th>Date</th>
                                <th>In stock (3)</th>
                                <th>Total Orders</th>
                                <th>Total Earnings on Product</th> 
                                <th>Activate</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} education={Row.education} color='success' text='activate' />
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

export default AffilateSuspendedProduct
