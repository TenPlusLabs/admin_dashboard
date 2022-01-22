import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
import './Main.css'
import { AddCircleOutlineSharp,AiOutlineSearch, Search } from '@mui/icons-material'

const Sidebar = () => {
    const [list,setList] = useState(0)
    // const [screeen, setScreen] = useState()
    
    function showMenu(val){
        if(list === val){
            setList(0)
        }else{
            setList(val)
        }
    }

    // const setBar = ()=>{
    //     if(window.innerWidth === 950){
    //         alert('yo')
    //     }
    // }

    // window.addEventListener('resize',()=>{
    //     if(window.innerWidth <= 700){
    //        document.getElementById('sidebar').style.display = 'none'
    //     }
    // })
    
    // if(window.innerWidth <= 700){
    //        document.getElementById('sidebar').style.display = 'none'
    //     }
    


    return (
        <>
    <div id="sidebar" className="active" style={{overflow: 'auto'}}>
        <div className="sidebar-wrapper active">
            <div className="sidebar-header">
                <div className="d-flex justify-content-between">
            
                </div>
            </div>

     <div className="sidebar-menu">
        <input type="checkbox" name="" id="nav-toggle"/>
        <div className="sidebar">
            <div className="sidebar-brand"> 
            <li>
            


            {/* <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={
                    {
                        paddingLeft: 0,
                        margintop: '2rem',
                        padding: '10.5px',
                        fontWeight: '600',
                        border: 'none',
                        borderRadius: '8px 0 0 8px',
                        marginTop: '10px',
                        width: '10%',
                        boxSizing: 'border-box',
                        color: 'blue',  
                    }
            } 
            >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg> 
            */}
            <div style={{display:'flex', alignItems: 'center', marginTop:'10px'}}>
            <span className='searchBtn'>
                <Search/>
            </span>
            <input type="search" placeholder="Search here" classNameName='form-control-sm border-none rounded-pill p-3' 
                style={
                    {
                        paddingLeft: 0,
                        margintop: '2rem',
                        height: '30px',
                        fontWeight: '600',
                        border: 'none',
                        borderRadius: '0  8px 8px 0',
                        width: '75%',
                        boxSizing: 'border-box',
                        outline: 'none',
                        display:'flex',
                        justifyContent:'center'
                    }
                } 
            />
            </div>
            </li>
            
            </div>
            <br/><br/>
            <div className="sidebar-menu">
                <ul>
                   
                    <ul className="menu"> 
                        {/* <li className={`sidebar-item ${list == 0 && 'active'}`}> 
                            <a href="/" className='sidebar-link'>
                                <i class="las la-igloo"></i>
                                <span>Overview</span>
                            </a>
                        </li> */}

                        <li className={`sidebar-item has-sub ${list ===  1 && 'active'}`} onClick={()=> showMenu(1)}>
                            <a href="#" className='sidebar-link'>
                                <i class="las la-tachometer-alt" style={{fontSize: '20px'}}></i>
                                <span>Dashboard</span>
                            </a>
                            <ul className={`submenu ${list === 1 && 'active'}`}>
                                <li className="submenu-item">
                                    <NavLink to='/' class='pt-3 p-2 pl-4'>Overview</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='/post' class='p-2 pl-5'>Post</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='/media' class='p-2 pl-5'>Media</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='/page' class='p-2 pl-5'>Pages</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='/comment' class='p-2 pl-5'>Comments</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='/form' class='pb-3 p-2 pl-5'>Forms</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className={`sidebar-item has-sub ${list ===  6 && 'active'}`} onClick={()=> showMenu(6)}>
                            <a href="#" className='sidebar-link'>
                                <i class="las la-phone" style={{fontSize: '20px'}}></i>
                                <span>Contact</span>
                            </a>
                            <ul className={`submenu ${list === 6 && 'active'}`}>
                                <li className="submenu-item">
                                    <NavLink to='/c_customer' class='pt-3 p-2 pl-4'>Customers</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className={`sidebar-item has-sub ${list ===  2 && 'active'}`} onClick={()=> showMenu(2)}>
                            <a href="#" className='sidebar-link'>
                            <i class="las la-door-open" style={{fontSize: '20px'}}></i>
                                <span>Portal</span>
                            </a>
                            <ul className={`submenu ${list === 2 && 'active'}`}>
                                <li className="submenu-item ">
                                    <NavLink to='/portal'>Portal</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='/coupons'>Coupons</NavLink>
                                </li>
                                <li className="submenu-item ">
                                    <NavLink to='customer'>Applications</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='/subscription'>Subscriptions</NavLink>
                                </li>
                                <li className="submenu-item ">
                                    <NavLink to='paymentPortal'>Payment</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='/userAccount'>User Accounts</NavLink>
                                </li>
                            </ul>
                        </li>

      
                        <li className={`sidebar-item has-sub ${list ===  3 && 'active'}`} onClick={()=> showMenu(3)}>
                            <a href="#" className='sidebar-link'>
                            <i class="las la-hand-holding-usd" style={{fontSize: '20px'}}></i>
                                <span> Affliates</span>
                            </a>
                            <ul className={`submenu ${list === 3 && 'active'}`}>
                            <li className="submenu-item ">
                                    <NavLink to='/affilatePages'>Pages</NavLink>
                                </li>
                                {/* <li className="submenu-item">
                                    <a href="component-badge.html">Badge</a>
                                </li> */}
                                <li className="submenu-item ">
                                    <NavLink to='links'>Link</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='members'>Members</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className={`sidebar-item has-sub ${list ===  5 && 'active'}`} onClick={()=> showMenu(5)}>
                            <a href="#" className='sidebar-link'>
                                <i class="las la-key" style={{fontSize: '20px'}}></i>
                                <span>Accounts</span>
                            </a>
                            <ul className={`submenu ${list === 5 && 'active'}`}>
                                <li className="submenu-item ">
                                    <NavLink to='/user'>Users</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='customer'>My Profile</NavLink>
                                </li>   
                            </ul>
                        </li>
                       
                        <li className={`sidebar-item has-sub ${list ===  4 && 'active'}`} onClick={()=> showMenu(4)}>
                            <a href="#" className='sidebar-link'>
                            <i class="las la-store" style={{fontSize: '20px'}}></i>
                                <span> E-commerce</span>
                            </a>
                            <br/>
                            <ul className={`submenu ${list === 4 && 'active'}`}>
                                {/* convert to sub menue */}
                                <li className="submenu-item">
                                    <NavLink to='#'>Product</NavLink>
                                    <ul>
                                        <li className="submenu-item">
                                            <NavLink to='/productCatalogue'>Product Catalogue</NavLink>
                                        </li>
                                        <li className="submenu-item">
                                            <NavLink to='/productFixed'>Products (Fixed Price)</NavLink>
                                        </li>
                                        <li className="submenu-item">
                                            <NavLink to='/productSelect'>Plans (Select Feature)</NavLink>
                                        </li>
                                        <li className="submenu-item">
                                            <NavLink to='/productSub'>Products (Plans or Subscriptions)</NavLink>
                                        </li>
                                    </ul>
                                </li>

                                <li className="submenu-item">
                                    <NavLink to='#'>Projects</NavLink>
                                    <ul>
                                        <li className="submenu-item">
                                            <NavLink to='/project_order'>Projects (Orders)</NavLink>
                                        </li>
                                        <li className="submenu-item">
                                            <NavLink to='/new_projects'>New Projects</NavLink>
                                        </li>
                                        <li className="submenu-item">
                                            <NavLink to='/pending_project'>Assigned Projects</NavLink>
                                        </li>
                                        <li className="submenu-item">
                                            <NavLink to='/ongoing_project'>Ongoing Projects</NavLink>
                                        </li>
                                        <li className="submenu-item">
                                            <NavLink to='/completed_project'>Completed Projects</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                
                                <li className="submenu-item">
                                    <NavLink to='customer'>Quotes</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='customer'>Cart</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='invoice'>Invoice</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='customer'>Cupons</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='customer'>Quotes</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='ratings_reviews'>Ratings and Reviews</NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink to='customer'>Payments</NavLink>
                                </li>
                            </ul>
                        </li>

                       

                    </ul>
                </ul>
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
    )
}

export default Sidebar
