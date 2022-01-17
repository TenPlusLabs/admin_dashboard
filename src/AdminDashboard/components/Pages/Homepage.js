import React from 'react'
import Main from '../Main'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar'
import '../index.css'
import Form from './Forms/Form'
import Page from './Pages/Page'
import Pages from './Pages/Pages'
import Media from './Media/Media'
import Comment from './Comment/Comment'

import Post from './Post/Post'
import Customer from './Customer/Customer'
import { Route, Routes } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <Sidebar/>
            <div className='main-content'>
                <Navbar/>
                <Routes>
                    <Route exact path='' element={<Main/>} />
                    <Route exact path='pages' element={<Page/>}/>
                    <Route exact path='lizzy' element={<Pages/>}/>
                    <Route exact path='media' element={<Media/>} />
                    <Route exact path='comment' element={<Comment/>} />
                    <Route exact path='form' element={<Form/>} />
                    <Route exact path='post' element={<Post/>} />
                    <Route exact path='customer' element={<Customer/>} />
                </Routes>
            </div>
        </div>
    )
}

export default Homepage
