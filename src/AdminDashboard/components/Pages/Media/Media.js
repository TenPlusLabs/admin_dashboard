import React,{ useState } from 'react'
import img from '../../../../assets/lana.jpg'
import BasicModal from '../Pages/Modal';


    


const Media = () => {

    

 return (
        <main>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <h2 className>Media Libary</h2>
                    <div className='col-12 mt-2 mb-5'>
                        <div className='float-right d-flex'>
                            <button className='btn btn-primary mr-3'>Upload</button>
                            <button className='btn btn-primary' >Edit Image</button>
                        </div>
                    </div>
                    
                    <div className='col-2 mr-3 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div><div className='col-2 mr-3 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-2 mr-3 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-2 mr-3 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-2 mr-3 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    
                    <div className='col-2 mr-3 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div><div className='col-2 mr-3 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-2 mr-3 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-2 mr-3 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>
                    <div className='col-2 mr-3 mt-3 border shadow'>
                        <img src={img} className='img-fluid media-img' alt='' />
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Media
