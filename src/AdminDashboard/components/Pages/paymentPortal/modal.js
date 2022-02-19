import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { DisputePaymentForm, SeeAllTable } from './Form';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    minWidth: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  export function PortalViewModal(prop) {
    const [openEdit, setEditOpen] = React.useState(false);
    const handleOpen = () => setEditOpen(true);
    const handleClose = () => setEditOpen(false);
  
    return (
      <>
        <span className='text-info mt-3 mr-3' onClick={handleOpen}>View</span> 
        <Modal
          open={openEdit}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SeeAllTable />
          </Box>
        </Modal>
      </>
    );
  }

export function AddNewPayment(prop) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen} className="mt-4"  variant="outlined"  startIcon={<AddCircleTwoToneIcon />}>Add New</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <DisputePaymentForm />
          </Box>
        </Modal>
      </div>
    );
  }
