import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Container, Row, Col } from "react-bootstrap";
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
    width: "50%",
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 14,
    p: 6,
  };

  const insideModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 14,
    p: 6,
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
    <Container className="contact-page">
      <Container className="greeting-div">
        <Row className="contact-page-style">
          <Col>
            {" "}
            <h2>Contact Me</h2>
            <ul className="contact-list">
              <li>
                <strong>Call Me: </strong>
                <a href="tel:816-678-1651">
                  <span>(816) 678-1651</span>
                </a>
              </li>
              <li>
                <strong>Check out my GitHub: </strong>
                <a href="https://github.com/PamtheHam">
                  <span>https://github.com/PamtheHam</span>
                </a>
              </li>
              <li>
                <strong>Connect with me on LinkedIn: </strong>
                <a href="https://www.linkedin.com/in/pamelahammond94/">
                  <span>https://www.linkedin.com/in/pamelahammond94</span>
                </a>
              </li>
              <li>
                <strong> Email Me: </strong>
                <a href="mailto:hammondpamelac@gmail.com">
                  <span>Hammondpamelac@gmail.com</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h6>Or fill out this form and I will get back to you!</h6>
            <div className="button-div">
              <button
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
                className="form-button"
              >
                Contact
              </button>
            </div>
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
                        <button
                          className="contact-button"
                          type="submit"
                          value="Send"
                        >
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
                      <Container>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="message successful modal"
                          aria-describedby="message successful"
                        >
                          <Box sx={insideModalStyle}>
                            <p
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                              className="contact-message"
                            >
                              Thank you! Your message was sent successfully and
                              I'll get back to you as soon as possible.
                            </p>
                            <div className="button-div">
                              <button
                                type="button"
                                className="form-button"
                                data-dismiss="modal"
                                onClick={
                                  (() => setShowModal(false), handleClose)
                                }
                              >
                                Close
                              </button>
                            </div>
                          </Box>
                        </Modal>
                      </Container>
                    )}
                  </div>
                </div>
              </Box>
            </Modal>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactUs;
