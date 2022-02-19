import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  width: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ActiveLinkModal(prop) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <td><span onClick={handleOpen} className='rounded bg-success cursor-pointer p-2 text-white'>Links</span></td>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <table className=' bg-light p-5 shadow text-blue'>
              <thead>
                <th>Links</th>
                <th>Type Of Links</th>
                <th>Top Performing Social Platform</th>
                <th>Earnings</th>
                <th>Total earnings</th>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td>text</td>
                  <td>text</td>
                  <td>text</td>
                  <td>text</td>
                  <td>text</td>
                </tr>
                <tr className='text-center'>
                  <td>text</td>
                  <td>text</td>
                  <td>text</td>
                  <td>text</td>
                  <td>text</td>
                </tr>
              </tbody>
            </table>
        </Box>
      </Modal>
    </div>
  );
}


export function SuspendedLinkModal(prop) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span onClick={handleOpen} className='rounded cursor-pointer bg-secondary p-2 text-white'>Links</span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <table className=' bg-light p-5 shadow text-blue'>
              <thead>
                <th>Links</th>
                <th>Type Of Links</th>
                <th>Top Performing Social Platform</th>
                <th>Earnings</th>
                <th>Total earnings</th>
                <th>Reason For Suspension </th>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td>text</td>
                  <td>text</td>
                  <td>Suspeded links</td>
                  <td>text</td>
                  <td>text</td>
                  <td>text  </td>
                </tr>
                <tr className='text-center'>
                  <td>text</td>
                  <td>Suspended links</td>
                  <td>text</td>
                  <td>text</td>
                  <td>text</td>
                  <td>text  </td>
                </tr>
              </tbody>
            </table>
        </Box>
      </Modal>
    </div>
  );
}


// export function EditModal(prop) {
//   const [openEdit, setEditOpen] = React.useState(false);
//   const handleOpen = () => setEditOpen(true);
//   const handleClose = () => setEditOpen(false);

//   return (
//     <>
//       <span className='text-secondary mt-3 mr-3' onClick={handleOpen}>Edit</span>
//       <Modal
//         open={openEdit}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//            <EditForm />

//           {/* <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography> */}
//         </Box>
//       </Modal>
//     </>
//   );
// }
