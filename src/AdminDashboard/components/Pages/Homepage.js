import React from 'react'
import Main from '../Main'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar'
import '../index.css'
import Form from './Forms/Form'
import Page from './Pages/Page'
import Pages from './Pages/Pages'
import Portal from './Portal/portal'
import Media from './Media/Media'
import Comment from './Comment/Comment'

import Post from './Post/Post'
import Customer from './Customer/Customer'
import { Route, Routes } from 'react-router-dom'
import Coupons from './coupons/coupon'
import RatingReview from './ratingReview/ratingReview'
import Subscription from './subscription/subscription'
import PaymentPortal from './paymentPortal/paymentPortal'
import AffilatePages from './affilatePages/afffilatPages'
import ProductCat from './productCatalogue/productCatalogue'
import PortalAcct from './PortalAccount/portalAccount'
import User from './users/users'
import ProductFixed from './products/productFixed'
import ProductSelect from './products/productSelect'
import ProductSub from './products/productSub'
import ContactCustomer from './c_customer/c_customer'
import ProjectOrder from './c_projects/project_order'
import NewProject from './c_projects/new_projects'
import PendingProject from './c_projects/pending_Project'
import OngoingProject from './c_projects/ongoing_projects'
import CompProject from './c_projects/comp_projects'
import Invoice from './invoices/invoice'
// import { Portal } from '@mui/material'
// import Sidebar1 from '../Sidebar1'

const Homepage = () => {
    return (
        <div>
            <Sidebar/>
            {/* <Sidebar1 /> */}
            {/* <div className='main-content'> */}
                <Navbar/>
                <Routes>
                    <Route exact path='' element={<Main/>} />
                    <Route exact path='pages' element={<Pages/>}/>
                    <Route exact path='page' element={<Page/>}/>
                    <Route exact path='media' element={<Media/>} />
                    <Route exact path='comment' element={<Comment/>} />
                    <Route exact path='form' element={<Form/>} />
                    <Route exact path='post' element={<Post/>} />
                    <Route exact path='customer' element={<Customer/>} />
                    <Route path='portal' element={<Portal/>} />
                    <Route path='coupons' element={<Coupons />} />
                    <Route path='ratings_reviews' element={<RatingReview />} />
                    <Route path='subscription' element={<Subscription />} />
                    <Route path='paymentPortal' element={<PaymentPortal />} />
                    <Route path='affilatePages' element={<AffilatePages/>} />
                    <Route path='productCatalogue' element={<ProductCat />} />
                    <Route path='userAccount' element={<PortalAcct />} />
                    <Route path='user' element={<User />} />
                    <Route path='productFixed' element={<ProductFixed />} />
                    <Route path='productSelect' element={<ProductSelect />} />
                    <Route path='productSub' element={<ProductSub />} />
                    <Route path='c_customer' element={<ContactCustomer />} />
                    <Route path='project_order' element={<ProjectOrder />} />
                    <Route path='new_projects' element={<NewProject />} />
                    <Route path='pending_project' element={<PendingProject/>} />
                    <Route path='ongoing_project' element={<OngoingProject />} />
                    <Route path='completed_project' element={<CompProject />} />
                    <Route path='invoice' element={<Invoice />} />
                </Routes>
            </div>
        // </div>
    )
}

export default Homepage
