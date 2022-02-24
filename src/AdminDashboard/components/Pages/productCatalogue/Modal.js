import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { ActualForms, FeatureForms, Form, PlanForms} from './Form';
import { Close } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function  ProductCatalogue(prop) {
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
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
           <Form />
        </Box>
      </Modal>
    </div>
  );
}


export function EditModal(prop) {
  const [openEdit, setEditOpen] = React.useState(false);
  const handleOpen = () => setEditOpen(true);
  const handleClose = () => setEditOpen(false);

  return (
    <>
      <span className='text-secondary mt-3 mr-3' onClick={handleOpen}>Edit</span>
      {/* <span className='text-secondary mt-3 mr-3'>Edit</span> */}
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
          <Typography>
              <PlanProduct onClick={handleClose}/>
              &nbsp;&nbsp;
              <FeatureProduct onClick={handleClose}/>
              &nbsp;&nbsp;
              <ActualProduct onClick={handleClose}/>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}


export function ActualProduct(prop) {
  const [openEdit, setEditOpen] = React.useState(false);
  const handleOpen = () => setEditOpen(true);
  const handleClose = () => setEditOpen(false);

  return (
    <>
      {/* <span className='text-secondary mt-3 mr-3' onClick={handleOpen}>Edit</span> */}
      <button className='btn btn-secondary' onClick={handleOpen}>Plan Product</button>
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
          <ActualForms />
        </Box>
      </Modal>
    </>
  );
}

export function FeatureProduct(prop) {
  const [openEdit, setEditOpen] = React.useState(false);
  const handleOpen = () => setEditOpen(true);
  const handleClose = () => setEditOpen(false);

  return (
    <>
      {/* <span className='text-secondary mt-3 mr-3' onClick={handleOpen}>Edit</span> */}
      <button className='btn btn-secondary' onClick={handleOpen}>Feature Product</button>
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
         <FeatureForms />
        </Box>
      </Modal>
    </>
  );
}

export function PlanProduct(prop) {
  const [openEdit, setEditOpen] = React.useState(false);
  const handleOpen = () => setEditOpen(true);
  const handleClose = () => setEditOpen(false);

  return (
    <>
      {/* <span className='text-secondary mt-3 mr-3' onClick={handleOpen}>Edit</span> */}
      <button className='btn btn-secondary' onClick={handleOpen}>Plan Product</button>
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
          <PlanForms />
        </Box>
      </Modal>
    </>
  );
}