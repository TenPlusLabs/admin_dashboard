import React from 'react'
import img from '../../src/assets/lana.jpg'

const Media = () => {
    return (
        <main>
            <div className='container-fluid'>
                <div className='row'>
                    <h2 className>Media Libary</h2>
                    <div className='col-12 mt-2 mb-5'>
                        <div className='float-right d-flex'>
                            <button className='btn btn-primary mr-3'>Upload</button>
                            <button className='btn btn-primary'>Edit Image</button>
                        </div>
                    </div>
                    <div className='col-3'>
                        <img src={img} alt='' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Media
