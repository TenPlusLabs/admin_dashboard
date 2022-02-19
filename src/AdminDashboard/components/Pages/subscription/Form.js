import React from 'react' 
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import '../Pages/Pages.css'
import BasicModal from '../Pages/Modal';
// import from './modal';



const Rows = [
    {id:1, form_name:'TenPlus Labs', form_page:'https://tenplus.com', total_unread:'01', total_response:'05'},
    {id:2, form_name:'TenPlus Labs', form_page:'https://tenplus.com', total_unread:'01', total_response:'05'},
    {id:3, form_name:'TenPlus Labs', form_page:'https://tenplus.com', total_unread:'01', total_response:'05'},
    {id:4, form_name:'TenPlus Labs', form_page:'https://tenplus.com', total_unread:'01', total_response:'05'},
    {id:5, form_name:'TenPlus Labs', form_page:'https://tenplus.com', total_unread:'01', total_response:'05'},
    {id:6, form_name:'TenPlus Labs', form_page:'https://tenplus.com', total_unread:'01', total_response:'05'}
]

const Table = (props) =>{
    const {id, form_page,total_unread,total_response }  = props;
   

    return(        
        <tr>
            <td>{id}</td>
            <td>{form_page}</td>
            <td>{total_unread}</td>
            <td>{total_response}</td> 
        </tr>
    )
    }

  
const SubFormView = (props) => {
   
    return (
        <div>
            <h4>Page Name: Affilate</h4>
            <hr/>
            <table className=' bg-light p-5  text-blue'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Program Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>Jhon Doe</td>
                                <td>jhondoe@gmail.com</td>
                                <td>0090909080</td>
                                <td>yunggstar</td>   
                            </tr>
                            <tr>
                                <td>Knott Watt</td>
                                <td>knottwatt</td>
                                <td>0912455</td>
                                <td>great</td>   
                            </tr>
                        </tbody>
                    </table>
        </div>
    )
}

export default SubFormView
