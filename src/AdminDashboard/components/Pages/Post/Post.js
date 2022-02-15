import React from 'react' 
import { NavLink } from 'react-router-dom';
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';

import {PostModal,PostSetting } from './modal';
// import '../Pages/Pages.css'
import './Post.css'

const Rows = [
    {id:1, title:'TenPlus Labs', author:'AJAPswenky', category:'published', tag:'0', comment:'yoo guy', date_published:'2021/05/05'},
    {id:2, title:'TenPlus Labs', author:'AJAPswenky', category:'published', tag:'0', comment:'yoo guy', date_published:'2021/05/05'},
    {id:3, title:'TenPlus Labs', author:'AJAPswenky', category:'05-01-2021', tag:'0', comment:'yoo guy', date_published:'2021/05/05'},
    {id:4, title:'TenPlus Labs', author:'AJAPswenky', category:'draft', tag:'0', comment:'yoo guy', date_published:'2021/05/05'},
    {id:5, title:'TenPlus Labs', author:'AJAPswenky', category:'bin', tag:'0', comment:'yoo guy', date_published:'2021/05/05'},
    {id:6, title:'TenPlus Labs', author:'AJAPswenky', category:'draft', tag:'0', comment:'yoo guy', date_published:'2021/05/05'}
]

const publishedRow  = Rows.filter(el => el.category === 'published')
const draftRow  = Rows.filter(el => el.category === 'draft')
const binRow  = Rows.filter(el => el.category === 'bin')   

const Table = (props) =>{
    const {id, title,author,category,tag,comment, date_published}  = props;
   
    // const [openModal, setOpenModal] = useState('');
    // const handleShow = () => {
    //     return <BasicModal />
    //   }; 

    return(        

        <tr>
            <td><input type='checkbox'/></td>
            <td>{id}</td>
            <td className='page_title' style={{width: '200px'}}> 
                {title}
                <div className='d-flex display-none'>
                    <span className='text-primary mt-3 mr-3'>
                       <NavLink to={`PostEdit?post=${id}`}> Edit </NavLink>
                    </span>
                    <br/>
                    <span className='text-secondary mt-3 mr-3'>
                        <NavLink to={`PostView?post=${id}`} target='_blank'>View</NavLink>
                    </span>
                    <br/>
                    <span className='text-danger mt-3'>Delete</span>
                </div>
             </td>
            <td>{author}</td>
            <td>{category}</td>
            <td>{tag}</td>
            <td>{comment}</td> 
            <td>{date_published}</td>   
            <td><PostSetting/></td>
        </tr>
    )
    }
const Post = (props) => {
   
    return (
        <main >
        <div className='container-fluid mt-5'>
                <div className='row ml-5'>
    <Tabs>
        <div className='d-flex justify-content-between mb-3'>
            <TabList className='col-md-5 col-lg-10 d-flex justify-content-around ml-5'>
                <Tab><button className='btn active'>All(3)</button></Tab>
                <Tab><button className='btn'>Published(0)</button></Tab>
                <Tab><button className='btn active'>Draft(3)</button></Tab>
                <Tab><button className='btn'>Bin(0)</button></Tab>
                <PostModal />
            </TabList>
        </div>
            <TabPanel>
                
                    <div className='col-12 container-fluid'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th><input type='checkbox'/></th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Tags</th>
                                <th>Comment</th>
                                <th>Date Published</th>
                                <th>Post Settings</th>
                            </tr>
                        </thead>
                         
                        <tbody>
                        {Rows.map((Row) =>{
                         return <Table key={Row.id} id={Row.id} title={Row.title} category={Row.category} tag={Row.tag} comment={Row.comment} author={Row.author} date_published={Row.date_published} />
                        }
                         )} 
                        </tbody>
                    </table>
                    </div>
            
        </TabPanel>
       
        <TabPanel>
        <div className='col-12 container-fluid'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th><input type='checkbox'/></th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Tags</th>
                                <th>Comment</th>
                                <th>Date Published</th>
                                <th>Add</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                       <tbody>
                        {publishedRow.map((nwRows) =>
                        <Table key={nwRows.id} id={nwRows.id} title={nwRows.title} category={nwRows.category} tag={nwRows.tag} comment={nwRows.comment} author={nwRows.author} date_published={nwRows.date_published} />
                        )} 
                        
                        </tbody>
                    </table>
            </div>
        </TabPanel>
       
        <TabPanel>
        <div className='col-12 container-fluid'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th><input type='checkbox'/></th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Tags</th>
                                <th>Comment</th>
                                <th>Date Published</th>
                                <th>Add</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                       <tbody>
                        {draftRow.map((nwRows) =>
                        <Table key={nwRows.id} id={nwRows.id} title={nwRows.title} category={nwRows.category} tag={nwRows.tag} comment={nwRows.comment} author={nwRows.author} date_published={nwRows.date_published} />
                        )} 
                        
                        </tbody>
                    </table>
        </div>             
        </TabPanel>

        <TabPanel>
        <div className='col-12 container-fluid'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th><input type='checkbox'/></th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Tags</th>
                                <th>Comment</th>
                                <th>Date Published</th>
                                <th>Add</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                       <tbody>
                        {binRow.map((nwRows) =>
                        <Table key={nwRows.id} id={nwRows.id} title={nwRows.title} category={nwRows.category} tag={nwRows.tag} comment={nwRows.comment} author={nwRows.author} date_published={nwRows.date_published} />
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

export default Post
