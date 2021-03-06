import React from 'react' 
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import Navbar from '../../Navbar/Navbar';
import '../Pages/Pages.css'

const Rows = [
    {id:1, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:2, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:3, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:4, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:5, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
    {id:6, page_title:'TenPlu Lab', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' }
]

const Table = (props) =>{
    const {id, page_title,page_url,date_published,date_description,meta_data, visit_today, visit_day, visit_month  }  = props;
   
    // const [openModal, setOpenModal] = useState('');
    // const handleShow = () => {
    //     return <BasicModal />
    //   };

    return(        

        <tr>
            <td>{id}</td>
            <td className='page_title'> {page_title}
                {/* <div className='d-flex display-none'>
                <button className='btn btn-secondary mt-3 mr-3'>Edit</button><button className='btn btn-danger mt-3'>Delete</button>
                </div> */}
             </td>
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
const RatingReview = (props) => {
   
    return (
        <main>
            <Navbar pg_name='Rating And Reviews' />
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-left mb-3'>
            <TabList className='col-md-5 d-flex justify-content-around ml-5'>
                {/* <Tab><button className='btn active'>All(3)</button></Tab> */}
                <Tab><button className='btn'>Projects(0)</button></Tab>
                <Tab><button className='btn active'>Posts(3)</button></Tab>
                {/* <Tab><button className='btn'>Bin(0)</button></Tab> */}
                {/* <Tab><BasicModal /></Tab> */}
                {/* <BasicModal /> */}
            </TabList>
            {/* <div className='margin'> <AddRatingModal /> </div> */}
        </div>
            <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Review Value</th>
                                <th>Review Description</th>
                                <th>Average Total Reviews</th>
                                <th>Product Name</th>
                                <th>Project Number</th>
                                <th>Category Name</th>
                                <th>Sub Category Name</th>
                                <th>Project Status</th>
                                <th>Completion Date</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Phone No</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} />
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
                            <th>Review Value</th>
                            <th>Review Description</th>
                            <th>Average Total Reviews</th>
                            <th>Post Title</th>
                            <th>Post Category</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Rows.map((Row) =>
                <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} />
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

export default RatingReview
