import React, {useState} from 'react' 
import { Link } from 'react-router-dom';
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import Navbar from '../../Navbar/Navbar';
import '../Pages/Pages.css'
import {EditModal, ProductCatalogue} from './Modal';



const Rows = [
    {id:1, page_title:'TenPlus Labs', product_url:'https://tenplus.com', sub_category:'some sub cat', date_description:'0', price:'200,000',date:'2021/05/05', category:'some cat', total_oders:'5', latest_in_order:'2',in_stock:'5' },
    {id:2, page_title:'TenPlus Labs', product_url:'https://tenplus.com', sub_category:'some sub cat', date_description:'0', price:'200,000',date:'2021/05/05', category:'some cat', total_oders:'5', latest_in_order:'2',in_stock:'5' },
    {id:3, page_title:'TenPlus Labs', product_url:'https://tenplus.com', sub_category:'some sub cat', date_description:'0', price:'200,000',date:'2021/05/05', category:'some cat', total_oders:'5', latest_in_order:'2',in_stock:'5' },
    {id:4, page_title:'TenPlus Labs', product_url:'https://tenplus.com', sub_category:'some sub cat', date_description:'0', price:'200,000',date:'2021/05/05', category:'some cat', total_oders:'5', latest_in_order:'2',in_stock:'5' },
    {id:5, page_title:'TenPlus Labs', product_url:'https://tenplus.com', sub_category:'some sub cat', date_description:'0', price:'200,000',date:'2021/05/05', category:'some cat', total_oders:'5', latest_in_order:'2' ,in_stock:'5'},
    {id:6, page_title:'TenPlu Lab', product_url:'https://tenplus.com', sub_category:'some sub cat', date_description:'0', price:'200,000',date:'2021/05/05', category:'some cat', total_oders:'5', latest_in_order:'2',in_stock:'5' }
]

const Table = (props) =>{
    const {id, page_title,date,product_url,sub_category,category,in_stock, total_oders, price, latest_in_order  }  = props;
   
    // const [openModal, setOpenModal] = useState('');
    // const handleShow = () => {
    //     return <BasicModal />
    //   };

    return(        

        <tr>
            <td>{id}</td>
            <td className='page_title' style={{width:'150px'}}> {page_title}
                <div className='d-flex display-none'>
                <EditModal />
                <span className='text-primary mt-3 mr-3'><Link to={`/product/productView?prod=${id}`}>View</Link></span>
                <span className='text-danger mt-3'>Delete</span>
                </div>
             </td>
            <td>{product_url}</td>
            <td>{category}</td>
            <td>{sub_category}</td> 
            <td>{total_oders}</td>
            <td>{in_stock}</td> 
            <td>{price}</td>
            <td>{latest_in_order}</td>
            <td>{date}</td>
            <td>{in_stock}</td> 
        </tr>
    )
    }
const ProductCat = (props) => {
   
    return (
        <main>
            <Navbar pg_name='Product Catalogue'/>
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-between mb-3'>
            <TabList className='col-md-5 d-flex justify-content-around ml-5'>
                {/* <Tab><button className='btn active'>All({Rows.length})</button></Tab> */}
                {/* <Tab><button className='btn'>Rroduct Catalogue</button></Tab>
                <Tab><button className='btn active'>Suspended Product</button></Tab>
                <Tab><button className='btn'>Active Product</button></Tab> */}
                {/* <Tab><BasicModal /></Tab> */}
                {/* <BasicModal /> */}
            </TabList>
            <div className='margin'> <ProductCatalogue /> </div>
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
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} sub_category={Row.sub_category} category={Row.category} in_stock={Row.in_stock} product_url={Row.product_url} date={Row.date} price={Row.price} total_oders={Row.total_oders} latest_in_order={Row.latest_in_order} />
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

export default ProductCat
