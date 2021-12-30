import React from 'react'


const Navbar = () => {
    return (
        <header className=''>
                <h2>
                <label for="nav-toggle">
                    <span class="las la-bars" ></span>
                </label>
                Dashboard
            </h2>
            
            <div className="user-wrapper">
                <img src="" alt="" width="30px" height="30px"/>
                <div>
                    <h4>John Doe</h4>
                    <small>Super admin</small>
                </div>
            </div>
        </header>
    )
}

export default Navbar
