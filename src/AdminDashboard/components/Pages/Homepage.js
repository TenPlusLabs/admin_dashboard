import React from 'react'
import Main from '../Main'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar'
import '../index.css'
import Pages from './Pages/Pages'
import Media from './Media/Media'
import Comment from './Comment/Comment'
import { Route, Routes } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <Sidebar/>
            <div className='main-content'>
                <Navbar/>
                <Main/>
                <Routes>
                    <Route exact path='/' element={<Main/>} />
                    <Route exact path='/pages' element={<Pages/>}/>
                    <Route exact path='/media' element={<Media/>} />
                    <Route exact path='/comment' element={<Comment/>} />
                </Routes>
            </div>
        </div>
    )
}

export default Homepage
