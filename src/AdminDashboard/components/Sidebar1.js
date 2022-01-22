import React from 'react'
// import { NavLink } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
    return (
        <>
       
       <input type="checkbox" name="" id="nav-toggle"/>
    {/* <div class="sidebar">
        <div class="sidebar-brand">
           
        </div> */}
        <div class="sidebar-menu">
                <ul class="menu">
                    <li class="sidebar-title">Menu</li>
                    
                    <li class="sidebar-item active ">
                        <a href="index.html" class='sidebar-link'>
                            <i class="bi bi-grid-fill"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    
                    <li class="sidebar-item  has-sub">
                        <a href="/" class='sidebar-link'>
                            <i class="bi bi-stack"></i>
                            <span>Components</span>
                        </a>
                        <ul class="submenu ">
                            <li class="submenu-item ">
                                <a href="component-alert.html">Alert</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="component-badge.html">Badge</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="component-breadcrumb.html">Breadcrumb</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="component-button.html">Button</a>
                            </li>
                            <li class="submenu-item ">
                                <a href="component-card.html">Card</a>
                            </li>
                        </ul>
                    </li>
                    
                    
                    <li class="sidebar-item  ">
                        <a href="application-checkout.html" class='sidebar-link'>
                            <i class="bi bi-basket-fill"></i>
                            <span>Checkout Page</span>
                        </a>
                    </li>
                    
                                       
                </ul>
            </div>
            <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
            {/* </div> */}
       
        </>
    )
}

export default Sidebar
