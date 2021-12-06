import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
init("user_lcufqfwTCpILtUaUtiswB");

const ContactUs = () => {
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "user_lcufqfwTCpILtUaUtiswB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormState({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <div>
      <button
        className="nav-link"
        style={{ cursor: "pointer" }}
        onClick={handleOpen}
      >
        Contact
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="contact" className="row-auth-wrapper">
            <div className="form-wrapper">
              <div className="form">
                <form ref={form} onSubmit={sendEmail}>
                  <p className="nav-link">Contact Me</p>
                  <label>Name</label>
                  <TextField
                    fullWidth
                    id="outlined-required"
                    type="text"
                    value={formState.user_name}
                    name="user_name"
                    onChange={handleChange}
                  />
                  <label>Email</label>
                  <TextField
                    fullWidth
                    id="outlined-required"
                    type="email"
                    value={formState.user_email}
                    name="user_email"
                    onChange={handleChange}
                  />
                  <label>Message</label>
                  <TextField
                    fullWidth
                    id="outlined-required"
                    value={formState.message}
                    name="message"
                    onChange={handleChange}
                  />
                  <button className="button" type="submit" value="Send">
                    Send
                  </button>
                  <button
                    className="button"
                    type="submit"
                    value="Close"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactUs;
