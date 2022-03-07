import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import {
  Form,
  EditOrderForm,
  EditNewProjectForm,
  EditPendingProjectForm,
  BillingForm,
  ShippingForm,
  AddMilestoneForm,
  AddTaskForm,
  chatForm,
  AugumentedBudget,
} from "./Form";
import { Add, Close, Edit, Chat } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(prop) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="mt-4"
        variant="outlined"
        startIcon={<AddCircleTwoToneIcon />}
      >
        Add New
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Start a new project</h2>
            <Close
              style={{ color: "#333" }}
              className="mb-2 cursor-pointer"
              onClick={handleClose}
            />
          </div>

          <Form />
        </Box>
      </Modal>
    </div>
  );
}

export function EditOrderModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <span  className='text-secondary mt-3 mr-3'>Edit</span> */}
      <Edit onClick={handleOpen} className="cursor-pointer text-secondary" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close
            style={{ marginLeft: "auto", color: "#333" }}
            className="mb-2 cursor-pointer"
            onClick={handleClose}
          />
          <EditOrderForm />
        </Box>
      </Modal>
    </>
  );
}

export function EditNewProjectModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <span onClick={handleOpen} className="text-secondary mt-3 mr-3">
        Edit
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close
            style={{ marginLeft: "auto", color: "#333" }}
            className="mb-2 cursor-pointer"
            onClick={handleClose}
          />
          <EditNewProjectForm />
        </Box>
      </Modal>
    </>
  );
}

export function EditPendingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <span onClick={handleOpen} className="text-secondary mt-3 mr-3">
        Edit
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close
            style={{ marginLeft: "auto", color: "#333" }}
            className="mb-2 cursor-pointer"
            onClick={handleClose}
          />
          <EditPendingProjectForm />
        </Box>
      </Modal>
    </>
  );
}

export function EditOngoingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <span onClick={handleOpen} className="text-secondary mt-3 mr-3">
        Edit
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close
            style={{ marginLeft: "auto", color: "#333" }}
            className="mb-2 cursor-pointer"
            onClick={handleClose}
          />
          <EditPendingProjectForm />
        </Box>
      </Modal>
    </>
  );
}

export function BillingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Edit className="mr-4 cursor-pointer" onClick={handleOpen} />
      {/* <span className='text-secondary mt-3 mr-3'>Edit</span> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close
            style={{ marginLeft: "auto", color: "#333" }}
            className="mb-2 cursor-pointer"
            onClick={handleClose}
          />
          <BillingForm />
        </Box>
      </Modal>
    </>
  );
}

export function ShippingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Edit className="mr-4 cursor-pointer" onClick={handleOpen} />
      {/* <span className='text-secondary mt-3 mr-3'>Edit</span> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close
            style={{ marginLeft: "auto", color: "#333" }}
            className="mb-2 cursor-pointer"
            onClick={handleClose}
          />
          <ShippingForm />
        </Box>
      </Modal>
    </>
  );
}

export function AddMilestoneModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <span
        className="btn btn-primary"
        onClick={handleOpen}
        style={{ float: "right" }}
      >
        <Add /> Add New
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close
            style={{ marginLeft: "auto", color: "#333" }}
            className="mb-2 cursor-pointer"
            onClick={handleClose}
          />
          <AddMilestoneForm />
        </Box>
      </Modal>
    </>
  );
}

export function AddTaskModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <span
        className="btn btn-primary"
        onClick={handleOpen}
        style={{ float: "right" }}
      >
        <Add /> Add New
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close
            style={{ marginLeft: "auto", color: "#333" }}
            className="mb-2 cursor-pointer"
            onClick={handleClose}
          />
          <AddTaskForm />
        </Box>
      </Modal>
    </>
  );
}

export function ViewTaskTopModal() {
  const [open, setOpen] = React.useState(false);
  const [chatOpen, setChatOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleChatOpen = () => setChatOpen(true);
  const handleClose = () => setOpen(false);
  const handleChatClose = () => setChatOpen(false);

  return (
    <>
      <span className="col-4" style={{ float: "right" }}>
        &nbsp;&nbsp;
        <Button
          className=""
          onClick={handleChatOpen}
          variant="outlined"
          startIcon={<Chat />}
        >
          Chat
        </Button>
        &nbsp;&nbsp;
        <Button
          className=""
          variant="outlined"
          onClick={handleOpen}
          startIcon={<Edit />}
        >
          Augment Budget
        </Button>
      </span>

      <Modal
        open={chatOpen}
        onClose={handleChatClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close
            style={{ marginLeft: "auto", color: "#333" }}
            className="mb-2 cursor-pointer"
            onClick={handleChatClose}
          />
          <chatForm />
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close
            style={{ marginLeft: "auto", color: "#333" }}
            className="mb-2 cursor-pointer"
            onClick={handleClose}
          />
          <AugumentedBudget />
        </Box>
      </Modal>
    </>
  );
}
