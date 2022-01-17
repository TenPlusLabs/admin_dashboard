import React from 'react'
import Modal from 'react-modal/lib/components/Modal'

const Modals = (props) => {
    return (
        <Modal isOpen={props.openModal} onRequestClose={() => props.setOpenModal(false)} className='' style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '12%',
              left: '25%',
              right: '25%',
              bottom: '25%',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '8px',
              outline: 'none',
              padding: '0px',
              color:'#01153c'
            }
            }}>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-6' >
                                </div>
                                <div className='col-md-6 p-3'>
                                    <h3 className='mt-2'>Welcome,<br/>
                                    Enter your details to get started</h3>
                                    <div className='mt-3 mb-5 d-flex'>
                                        <button className='modal-button'>
                                        Sign up with Facebook
                                        </button>
                                        <button className='modal-button'>
                                        Sign up with Google
                                        </button>
                                    </div>
                                    <div className='d-flex  mt-3 mb-1'>
                                    <hr className='w-25 mt-n1 mr-1'/><span className='mt-n3'>OR</span><hr className='ml-1 w-25 mt-n1'/>
                                    </div>
                                    <div>
                                     {
                                        props.active === 'Login' && null
                                     }
                                     {
                                         props.active === 'Sign-up' && null
                                     }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
    )
}

export default Modals


