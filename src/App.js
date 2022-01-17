import {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Details from './components/Pages/Details/Details';
import Homepage from './components/Pages/Homepage';
import Order from './components/Pages/Order/Order';
import Password from './components/Pages/Password/Password';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom'
import Address from './components/Pages/Address-book/Address';


const App = () => {

const [sidebarOpen, setSidebarOpen] = useState(false);

const openSidebar = () =>{
  setSidebarOpen(true);
}
const closeSidebar = () =>{
  setSidebarOpen(false);
}
  return (
    <div className="">
      <h1>TenPlus</h1>
      
      <Sidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <div className='main-content'>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        
      
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/Details' element={<Details/>}/>
        <Route exact path='/Order' element={<Order/>}/>
        <Route exact path='/Message' element={<Details/>}/>
        <Route exact path='/Ticket' element={<Order/>}/>
        <Route exact path='/Pending-reviews' element={<Details/>}/>
        <Route exact path='/Address-book' element={<Address/>}/>
        <Route exact path='/Change-password' element={<Password/>}/>
        <Route exact path='/Logout' element={<Order/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
