import React from 'react'
import img from '../../../../assets/lana.jpg'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import './Comment.css'


const Comments = [
    {id:1, file:img, author:'AJAPswenky', upload:'Sample post', comment:'0', date:'2021/05/05' },
    {id:2, file:img, author:'AJAPswenky', upload:'Sample post', comment:'0', date:'2021/05/05' },
    {id:3, file:img, author:'AJAPswenky', upload:'Sample post', comment:'0', date:'2021/05/05' },
    {id:4, file:img, author:'AJAPswenky', upload:'Sample post', comment:'0', date:'2021/05/05' },
    {id:5, file:img, author:'AJAPswenky', upload:'Sample post', comment:'0', date:'2021/05/05' },
    {id:6, file:img, author:'AJAPswenky', upload:'Sample post', comment:'0', date:'2021/05/05' }
]

const Table = (props) =>{
    const { file,author,upload,comment, date }  = props;
    return(
        <tr>
            <td>
                <img src={file} alt='' className='img-fluid comment-img'/>
            </td>
            <td>{author}</td>
            <td>{upload}</td>
            <td>{comment}</td>
            <td>{date}</td>
        </tr>
    )
    }
const Comment = (props) => {
    return (
        <main>
        <div className='container-fluid mt-5'>
                <div className='row ml-5'>
    <Tabs>
            <TabList className='col-md-5 d-flex justify-content-around ml-5'>
                <Tab><button className='btn active'>All(3)</button></Tab>
                <Tab><button className='btn'>Mine(0)</button></Tab>
                <Tab><button className='btn active'>Pending(3)</button></Tab>
                <Tab><button className='btn'>Approved(0)</button></Tab>
                <Tab><button className='btn active'>Spam(3)</button></Tab>
                <Tab><button className='btn'>Trash(0)</button></Tab>
            </TabList>

            <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <td>File</td>
                                <td>Author</td>
                                <td>Uploaded to</td>
                                <td><i className='las la-comment'></i></td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody>
                        {Comments.map((Comment) =>
                    <Table key={Comment.id} file={Comment.file} upload={Comment.upload} date={Comment.date} author={Comment.author} comment={Comment.comment} />
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

export default Comment
