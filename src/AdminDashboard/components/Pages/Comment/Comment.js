import React from 'react'
import img from '../../../../assets/lana.jpg'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import './Comment.css'

const Comment = () => {
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
                            <tr>
                                <td>
                                    <img src={img} alt='' className='img-fluid comment-img'/>
                                </td>
                                <td>AJAPswenky</td>
                                <td>Sample post</td>
                                <td>0</td>
                                <td>2021/05/05</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={img} alt='' className='img-fluid comment-img'/>
                                </td>
                                <td>AJAPswenky</td>
                                <td>Sample post</td>
                                <td>0</td>
                                <td>2021/05/05</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={img} alt='' className='img-fluid comment-img'/>
                                </td>
                                <td>AJAPswenky</td>
                                <td>Sample post</td>
                                <td>0</td>
                                <td>2021/05/05</td>
                            </tr>
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
