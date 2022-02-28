import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {AddNewForm, FormEdit, FormView} from './ModalForm'
import { Button } from '@mui/material';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { Close } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  minHeight:'250px',
  maxWidth: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function BasicModal(prop) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span className='d-flex'>
        <Button className=""  variant="outlined" onClick={handleOpen}  startIcon={<AddCircleTwoToneIcon />}>Add New</Button>
     </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
          <AddNewForm />
        </Box>
      </Modal>
    </div>
  );
}

export function FormModal(prop) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span className='d-flex'>
        <span className='text-secondary mt-3 mr-3' onClick={handleOpen}>Edit</span> 
     </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
          <FormEdit />
        </Box>
      </Modal>
    </div>
  );
}

export function FormViewModal(prop) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span className='d-flex'>
          <span className='text-primary mt-3 mr-3' onClick={handleOpen}>View</span>
     </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
            <div>
              <h4>Form Names:</h4>
              <hr/>
              <table className=' bg-light p-5 text-blue'>
                <thead>
                  <tr>
                    <th>Form Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Question</th>
                    <th>Responses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Application</td>
                     <td>Hatake</td>
                     <td>Kakashi</td>
                     <td>How to seal nine tails</td>
                     <ViewResopnse />
                   </tr>
                   <tr>
                    <td>Application</td>
                     <td>Might</td>
                     <td>Guy</td>
                     <td>How to seal nine tails</td>
                     <ViewResopnse />
                   </tr>
                   <tr>
                    <td>Application</td>
                     <td>Rock</td>
                     <td>Lee</td>
                     <td>How to seal nine tails</td>
                     <ViewResopnse />
                   </tr>
                  </tbody>
              </table>
            </div>
        </Box>
      </Modal>
    </div>
  );
}

function ViewResopnse(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
          <td className='cursor-pointer text-primary' onClick={handleOpen}>View</td>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
          <Box sx={style}>
          <Close style={{marginLeft:'auto',color:'#333'}} className='mb-2 cursor-pointer' onClick={handleClose} />
            <FormView />
          </Box>
        </Modal>
        </>
    )
}
