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
    width: 350,
    bgcolor: "#f7e6d9",
    border: "1px solid #000",
    boxShadow: 25,
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
    <>
      <button
        className="nav-links"
        style={{ cursor: "pointer" }}
        id="contact-link"
        onClick={handleOpen}
      >
        Contact
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Contact Me Form"
        aria-describedby="a modal that has input for contact information"
      >
        <Box sx={style}>
          <div id="contact">
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <p className="contact-title">Contact Me</p>
                <label>Name</label>
                <TextField
                  fullWidth
                  id="outlined-required"
                  type="text"
                  value={formState.user_name}
                  name="user_name"
                  onChange={handleChange}
                  required
                />
                <label>Email</label>
                <TextField
                  fullWidth
                  id="outlined-required"
                  type="email"
                  value={formState.user_email}
                  name="user_email"
                  onChange={handleChange}
                  required
                />
                <label>Message</label>
                <TextField
                  fullWidth
                  id="outline-required"
                  value={formState.message}
                  name="message"
                  onChange={handleChange}
                  required
                />
                <button className="contact-button" type="submit" value="Send">
                  Send
                </button>
                <button
                  className="contact-button"
                  type="submit"
                  value="Close"
                  onClick={handleClose}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ContactUs;
