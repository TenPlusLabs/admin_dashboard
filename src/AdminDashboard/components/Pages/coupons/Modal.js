import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Form, {CouponUsageEditForm, SeeAllTable } from './Form';
import { Close, Update } from '@mui/icons-material';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

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

export function AddNewCoupon(prop) {
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


export default function UserApplicable(prop) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span onClick={handleOpen} className='text-secondary mt-3 mr-3'>Change</span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
          <div class="row">
            <div class="col">
              <div class="form-outline">
                <select className='form-control'>
                  <option>New</option>
                  <option>Existing</option>
                  <option>Both</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <Button className="form-control"  variant="outlined"  startIcon={<Update />}>Update</Button>
              </div>
            </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}


export function ChangeProductApplicable(prop) {
  const [openEdit, setEditOpen] = React.useState(false);
  const handleOpen = () => setEditOpen(true);
  const handleClose = () => setEditOpen(false);

  return (
    <>
      <span className='text-secondary mt-3 mr-3' onClick={handleOpen}>Change</span> 
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
        <div class="row">
            <div class="col">
              <div class="form-outline">
                <select className='form-control'>
                  <option>Active Prog 1</option>
                  <option>Active Prog 1</option>
                  <option>Active Prog 1</option>
                  <option>Active Prog 1</option>
                  <option>Active Prog 1</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <Button className="form-control"  variant="outlined"  startIcon={<Update />}>Update</Button>
              </div>
            </div>
            </div>
        </Box>
      </Modal>
    </>
  );
}

export function ChangeProductSubCat(prop) {
  const [openEdit, setEditOpen] = React.useState(false);
  const handleOpen = () => setEditOpen(true);
  const handleClose = () => setEditOpen(false);

  return (
    <>
      <span className='text-secondary mt-3 mr-3' onClick={handleOpen}>Change</span> 
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
        <div class="row">
            <div class="col">
              <div class="form-outline">
                <select className='form-control'>
                  <option>Sub Menu Prog 1</option>
                  <option>Sub Menu Prog 1</option>
                  <option>Sub Menu Prog 1</option>
                  <option>Sub Menu Prog 1</option>
                  <option>Sub Menu Prog 1</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <Button className="form-control"  variant="outlined"  startIcon={<Update />}>Update</Button>
              </div>
            </div>
            </div>
        </Box>
      </Modal>
    </>
  );
}

export function ChangeProductExpDate(prop) {
  const [openEdit, setEditOpen] = React.useState(false);
  const handleOpen = () => setEditOpen(true);
  const handleClose = () => setEditOpen(false);

  return (
    <>
      <span className='text-secondary mt-3 mr-3' onClick={handleOpen}>Change</span> 
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
        <div class="row">
            <div class="col">
              <div class="form-outline">
                <input type='date' className='form-control'/>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <Button className="form-control"  variant="outlined"  startIcon={<Update />}>Update</Button>
              </div>
            </div>
            </div>
        </Box>
      </Modal>
    </>
  );
}


export function CustomerUsageViewAll(prop) {
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
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
          <SeeAllTable />
        </Box>
      </Modal>
    </>
  );
}

export function CouponUsageEdit(prop) {
  const [openEdit, setEditOpen] = React.useState(false);
  const handleOpen = () => setEditOpen(true);
  const handleClose = () => setEditOpen(false);

  return (
    <>
      <span className='text-secondary mt-3 mr-3' onClick={handleOpen}>Change</span> 
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
          <CouponUsageEditForm />
        </Box>
      </Modal>
    </>
  );
}
