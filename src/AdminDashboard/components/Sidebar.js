import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    return (
        <>
            <input type="checkbox" name="" id="nav-toggle"/>
    <div class="sidebar">
        <div class="sidebar-brand">
           
        </div>
        <div class="sidebar-menu">
            <ul>
                <li>
                   
                    <input type="search" placeholder="Search here" className='form-control-sm border-none rounded-pill p-3'/>
                </li>
                <li>
                    <NavLink to="/" ><span class="las la-igloo"></span>
                    <span>Overview</span></NavLink>
                </li>
                <li>
                    <NavLink to="dashboard/Properties" class="active"><span class="las la-igloo"></span>
                    <span>Post</span></NavLink>
                </li>
                <li>
                    <NavLink to="/media"><span class="las la-igloo"></span>
                    <span>Media</span></NavLink>
                </li>
                <li>
                    <NavLink to="/pages"><span class="las la-igloo"></span>
                     <span>Pages</span></NavLink>
                </li>
                <li>
                    <NavLink to="/comment"><span class="las la-igloo"></span>
                    <span>comments</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Refferal"><span class="las la-igloo"></span>
                    <span>Refferal</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Settings"><span class="las la-igloo"></span>
                    <span>Forms</span></NavLink>
                </li>
                <li>
                    <NavLink to="dashboard/Loans"><span class="las la-igloo"></span>
                    <span>Customer</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Wallet"><span class="las la-igloo"></span>
                     <span>Products Inventory</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Transactions"><span class="las la-igloo"></span>
                    <span>Projects</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Refferal"><span class="las la-igloo"></span>
                    <span>Quotes</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Settings"><span class="las la-igloo"></span>
                    <span>Invoice</span></NavLink>
                </li>
                <li>
                    <NavLink to="dashboard/Loans"><span class="las la-igloo"></span>
                    <span>Cart</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Wallet"><span class="las la-igloo"></span>
                     <span>Coupons</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Transactions"><span class="las la-igloo"></span>
                    <span>Ratings and Reviews</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Refferal"><span class="las la-igloo mb-3"></span>
                    <span>Payments</span></NavLink>
                </li>
                <hr/>
                <li>
                    <NavLink to="/Settings"><span class="las la-igloo"></span>
                    <span>Pages</span></NavLink>
                </li>
                <li>
                    <NavLink to="dashboard/Loans"><span class="las la-igloo"></span>
                    <span>Programs</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Wallet"><span class="las la-igloo"></span>
                     <span>Coupons</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Transactions"><span class="las la-igloo"></span>
                    <span>Applications</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Refferal"><span class="las la-igloo"></span>
                    <span>Subscriptions</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Settings"><span class="las la-igloo "></span>
                    <span>Payments</span></NavLink>
                </li>
                <li>
                    <NavLink to="dashboard/Loans"><span class="las la-igloo mb-3"></span>
                    <span>User Accounts</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Wallet"><span class="las la-igloo mt-1"></span>
                     <span>Pages</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Transactions"><span class="las la-igloo"></span>
                    <span>Product Catalogue</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Refferal"><span class="las la-igloo"></span>
                    <span>Links</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Settings"><span class="las la-igloo mb-3"></span>
                    <span>Members</span></NavLink>
                </li>
                <li>
                    <NavLink to="dashboard/Loans"><span class="las la-igloo mt-1"></span>
                    <span>Users</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Wallet"><span class="las la-igloo"></span>
                     <span>Profile</span></NavLink>
                </li>
            </ul>
        </div>
    </div>
        </>
    )
}

export default Sidebar
