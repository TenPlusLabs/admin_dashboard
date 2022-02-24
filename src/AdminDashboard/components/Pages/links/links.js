import React, {useState} from 'react' 
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import Navbar from '../../Navbar/Navbar';
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
    const {id, page_title,page_url,date_published,date_description,meta_data, visit_today, visit_day, visit_month,education,color,text }  = props;
   
    // const [openModal, setOpenModal] = useState('');
    // const handleShow = () => {
    //     return <BasicModal />
    //   };

    return(        

        <tr>
            <td>{id}</td>
            {/* <td className='page_title' style={{width:'150px'}}> {page_title}
                <div className='d-flex display-none'>
                <span className='text-secondary mt-3 mr-3'>Suspend</span><span className='text-danger mt-3'>Delete</span>
                </div>
             </td> */}
            <td>{page_url}</td>
            <td>{date_published}</td>
            <td>{date_description}</td>
            <td>{meta_data}</td> 
            <td>{visit_today}</td>
            <td>{visit_day}</td>
            <td>{visit_month}</td>
            <td>{education}</td>
            <span className={`btn btn-${color} mt-3 mr-3`}>{text}</span>
        </tr>
    )
    }
const Links = (props) => {
   
    return (
        <main>
            <Navbar pg_name='Links'/>
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-between mb-3'>
            <TabList className='col-md-5 d-flex justify-content-around ml-5'>
                <Tab><button className='btn active'>Active(3)</button></Tab>
                <Tab><button className='btn active'>Suspended(5)</button></Tab>
                {/* <Tab><BasicModal /></Tab> */}
                {/* <BasicModal /> */}
            </TabList>
            {/* <div className='margin'> <BasicModal /> </div> */}
        </div>
            <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone number</th>
                                <th>Website</th>
                                <th>Facebook</th>
                                <th>Facebook</th>
                                <th>Company</th>
                                <th>Education</th>
                                <th>Suspend</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} education={Row.education} color='secondary' text='suspend'/>
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
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone number</th>
                                <th>Website</th>
                                <th>Facebook</th>
                                <th>Facebook</th>
                                <th>Company</th>
                                <th>Education</th>
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

export default Links
