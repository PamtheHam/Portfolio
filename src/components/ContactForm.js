import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
init("user_lcufqfwTCpILtUaUtiswB");

const ContactUs = () => {
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
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
    bgcolor: "white",
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
        },
        setShowModal(true)
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
                <label className="label-color">Name</label>
                <TextField
                  fullWidth
                  id="outlined-required"
                  type="text"
                  value={formState.user_name}
                  name="user_name"
                  onChange={handleChange}
                  required
                />
                <label className="label-color">Email</label>
                <TextField
                  fullWidth
                  id="outlined-required"
                  type="email"
                  value={formState.user_email}
                  name="user_email"
                  onChange={handleChange}
                  required
                />
                <label className="label-color">Message</label>
                <TextField
                  fullWidth
                  id="outline-required"
                  value={formState.message}
                  name="message"
                  onChange={handleChange}
                  required
                />
                <div className="button-div">
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
                </div>
              </form>
              {showModal && (
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-message-successful"
                    aria-describedby="message successful modal"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Your message was sent successfully and I'll get back to
                        you as soon as possible. Thank you!
                      </Typography>
                      <button
                        type="button"
                        className="contact-button"
                        data-dismiss="modal"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </Box>
                  </Modal>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ContactUs;
