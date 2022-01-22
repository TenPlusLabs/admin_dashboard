import React,{ useState } from 'react'
import img from '../../../../assets/lana.jpg'
import BasicModal from '../Pages/Modal';
import "./Media.css"


    


const Media = () => {

    

 return (
        <main>
            <div className='container-fluid mt-5'>
                {/*media Libary
                goes here*/}
                <div className='media_libraryHeader'>
                <div className='row'>
                    <h2 className='ml-5'>Media Libary</h2>
                    <div className='col-12 mt-2 mb-5'>
                        <div className='float-right d-flex'>
                            <button className='btn btn-primary mr-3'>Upload</button>
                            <button className='btn btn-primary' >Edit Image</button>
                        </div>
                    </div>
                    </div>
                    </div>
                   {/*images
                    container*/}
                    <div className='image_container'>
                    <div className='row'>
                       
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
