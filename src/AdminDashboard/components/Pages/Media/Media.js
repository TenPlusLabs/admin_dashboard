import React from 'react'
import img from '../../../../assets/lana.jpg'
import "./Media.css"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import { Close } from '@mui/icons-material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };


const Media = () => {
    const [open, setOpen] = React.useState(false);
    const openImgModal = () => setOpen(true);
    const handleClose = () => setOpen(false);

 return (
        <main>
            <Navbar pg_name='Media'/>
            <div className='container-fluid mt-5'>
                {/*media Libary
                goes here*/}
                <div className='media_libraryHeader'>
                <div className='row'>
                    <h2 className='ml-5'>Media Libary</h2>
                    <div className='col-12 mb-5'>
                        <div className='float-right d-flex'>
                            <label for='upload_img' className='btn btn-primary'>Upload</label>
                            &nbsp;&nbsp;
                            <input type='file' className='btn btn-primary mr-3 display-none' id='upload_img'/>
                            <NavLink to='MediaEdit'>
                                <button className='btn btn-primary'>Edit Image</button>
                            </NavLink>
                        </div>
                    </div>
                    </div>
                    </div>
                   {/*images
                    container*/}
                    <div className='image_container'>
                    <div className='row'>
                       
                    <div className='col-sm-3 col-md-4 mt-3 border shadow' onClick={openImgModal}>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                         <Box sx={style}>
                         <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
                             <div className='d-flex'>
                                <img src={img} className='img-fluid media-img' alt=''style={{width:'60%'}} />
                                <fieldset style={{width:'40%',paddingTop:'13px'}}>
                                    <span className='text-lg'>Author:</span> <h3>Jhon Doe...</h3>
                                    <hr/>
                                    <span className='text-lg'>Description</span><hr/>
                                    Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. 
                                    Id esse reprehenderit perferendis
                                    doloribus aperiam eveniet quas sit
                                    Quo repellendus eum vitae, eos animi!
                                    Quia assumenda ex odit, possimus labore
                                    repudiandae nobis aliquid repellendus facere 
                                    quibusdam unde sapiente quos quidem tenetur qui
                                    rerum impedit aliquam harum voluptatum maxime 
                                    laboriosam veritatis, vero est. Sit cum, provident
                                    natus aspernatur quo eos adipisci architecto illum 
                                    velit ipsa ullam deleniti vel inventore quia
                                    laboriosam perferendis officiis neque beatae 
                                    debitis consectetur voluptatibus asperiores ut
                                    non maiores? Nemo id veritatis rem odio, 
                                    aspernatur pariatur deleniti adipisci maiores 
                                    nihil rerum. Alias eligendi
                                    doloribus obcaecati illo esse fugiat maiores.
                                </fieldset>
                            </div>
                         </Box>
                    </Modal>
                    <div className='col-sm-3 col-md-4  mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-sm-3 col-md-4 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-sm-3 col-md-4 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-sm-3 col-md-4 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    
                    <div className='col-sm-3 col-md-4  mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-sm-3 col-md-4 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-sm-3 col-md-4  mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-sm-3 col-md-4 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-sm-3 col-md-4 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-sm-3 col-md-4 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-sm-3 col-md-4 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                </div>
                </div>
            </div>
            
        </main>
    )
}

export default Media
