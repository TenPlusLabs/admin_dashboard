import React, { useDisclosure} from 'react' 
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import '../Pages/Pages.css'
import BasicModal from '../Pages/Modal';
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     Text,
//   } from '@chakra-ui/react'



const Rows = [
    {id:1, form_name:'TenPlus Labs', form_page:'AJAPswenky', total_unread:'01', total_response:'05'},
    {id:2, form_name:'TenPlus Labs', form_page:'AJAPswenky', total_unread:'01', total_response:'05'},
    {id:3, form_name:'TenPlus Labs', form_page:'AJAPswenky', total_unread:'01', total_response:'05'},
    {id:4, form_name:'TenPlus Labs', form_page:'AJAPswenky', total_unread:'01', total_response:'05'},
    {id:5, form_name:'TenPlus Labs', form_page:'AJAPswenky', total_unread:'01', total_response:'05'},
    {id:6, form_name:'TenPlus Labs', form_page:'AJAPswenky', total_unread:'01', total_response:'05'}
]

const Table = (props) =>{
    const {id, form_name,form_page,total_unread,total_response }  = props;
   

    return(        

        <tr>
            <td>{id}</td>
            <td className='page_title'  colspan="2" > {form_name}
                <div className='d-flex display-none'>
                <button className='btn btn-primary mt-3 mr-3' >View</button>
                <button className='btn btn-primary mt-3 mr-3'>Edit</button>
                <button className='btn btn-primary mt-3'>Delete</button>
                </div>
             </td>
            <td>{form_page}</td>
            <td>{total_unread}</td>
            <td>{total_response}</td> 
        </tr>
    )
    }

    // function BasicUsage() {
    //     const { isOpen, onOpen, onClose } = useDisclosure()
    //     return (
    //       <>
    //         <Button onClick={onOpen}>Open Modal</Button>
      
    //         <Modal isOpen={isOpen} onClose={onClose}>
    //           <ModalOverlay />
    //           <ModalContent>
    //             <ModalHeader>Modal Title</ModalHeader>
    //             <ModalCloseButton />
    //             <ModalBody>
    //             <Text fontWeight='bold' mb='1rem'>
    //           You can scroll the content behind the modal
    //         </Text>
    //             </ModalBody>
      
    //             <ModalFooter>
    //               <Button colorScheme='blue' mr={3} onClick={onClose}>
    //                 Close
    //               </Button>
    //               <Button variant='ghost'>Secondary Action</Button>
    //             </ModalFooter>
    //           </ModalContent>
    //         </Modal>
    //       </>
    //     )
    //   }

const Form = (props) => {
   
    return (
        <main>
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-between mb-3'>
            <TabList className='col-md-5 d-flex justify-content-around ml-5'>
                <Tab><button className='btn active'>All(3)</button></Tab>
                <Tab><button className='btn'>Published(0)</button></Tab>
                <Tab><button className='btn active'>Draft(3)</button></Tab>
                <Tab><button className='btn'>Bin(0)</button></Tab>
            </TabList>
            <div className='margin'> <BasicModal /> </div>
        </div>
            <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th colspan="2">Form Name</th>
                                <th>Form Page</th>
                                <th>Total Unread</th>
                                <th>Total Response</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} form_name={Row.form_name} total_unread={Row.total_unread}  total_response={Row.total_response} form_page={Row.form_page}  />
                    )} 
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

export default Form
