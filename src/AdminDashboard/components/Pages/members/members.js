import React, {useState} from 'react' 
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import '../Pages/Pages.css'
// import BasicModal from './Modal';



const Rows = [
    {id:1, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2', total_earning:'#200', top_performance_platform:'twitter',status:'suspended' },
    {id:2, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' , total_earning:'#200', top_performance_platform:'twitter',status:'active'},
    {id:3, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2', total_earning:'#200', top_performance_platform:'twitter',status:'suspended' },
    {id:4, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2', total_earning:'#200', top_performance_platform:'twitter',status:'active'},
    {id:5, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2', total_earning:'#200', top_performance_platform:'twitter',status:'suspended'},
    {id:6, page_title:'TenPlu Lab', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2', total_earning:'#200', top_performance_platform:'twitter',status:'active'}
]

const suspended = Rows.filter(stat => stat.status === 'suspended')
const active = Rows.filter(stat => stat.status === 'active')


const Table = (props) =>{
    const {id, page_title,page_url,date_published,date_description,meta_data, visit_today, visit_day, visit_month,total_earning,top_pp}  = props;
   
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
            <td>{date_published}</td>
            <td>{date_description}</td>
            <td>{meta_data}</td> 
            <td>{visit_today}</td>
            <td>{visit_day}</td>
            <td>{visit_month}</td>
            <td><span className='rounded bg-success p-2 text-white'>Links</span></td>
            <td><span className='rounded bg-secondary p-2 text-white'>Links</span></td>
            <td>{total_earning}</td>
            <td>{top_pp}</td>
        </tr>
    )
    }
const Members = (props) => {
   
    return (
        <main>
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-between mb-3'>
            <TabList className='col-md-5 d-flex justify-content-around ml-5'>
                <Tab><button className='btn active'>All({Rows.length})</button></Tab>
                <Tab><button className='btn'>Active Members</button></Tab>
                <Tab><button className='btn active'>Suspended Members</button></Tab>
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
                                <th>Phone Number</th>
                                <th>Website</th>
                                <th>Facebook</th>
                                <th>Instagram</th>
                                <th>Company</th>
                                <th>Education</th>
                                <th>Active Links</th>
                                <th>Suspended Links</th>
                                <th>Total earnings</th>
                                <th>Top Performing Social Platform</th>
{/*             
(Clicking any of Active or 
Suspended Links presents a 
modal showing a list of all 
the links whether active or 
suspended, with their 
earning and reason for 
suspension), , 
for that user */}
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} total_earning={Row.total_earning} top_pp={Row.top_performance_platform} />
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
                            <th>Phone Number</th>
                            <th>Website</th>
                            <th>Facebook</th>
                            <th>Instagram</th>
                            <th>Company</th>
                            <th>Education</th>
                            <th>Active Links</th>
                            <th>Suspended Links</th>
                            <th>Total earnings</th>
                            <th>Top Performing Social Platform</th>
                        </tr>
                    </thead>
                    <tbody>
                    {active.map((Row) =>
                <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} total_earning={Row.total_earning} top_pp={Row.top_performance_platform} />
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
                                <th>Phone Number</th>
                                <th>Website</th>
                                <th>Facebook</th>
                                <th>Instagram</th>
                                <th>Company</th>
                                <th>Education</th>
                                <th>Active Links</th>
                                <th>Suspended Links</th>
                                <th>Total earnings</th>
                                <th>Top Performing Social Platform</th>
                            </tr>
                        </thead>
                        <tbody>
                        {suspended.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} total_earning={Row.total_earning} top_pp={Row.top_performance_platform} />
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

export default Members
