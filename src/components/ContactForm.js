import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import TextField from "@mui/material/TextField";
init("user_lcufqfwTCpILtUaUtiswB");

const ContactUs = () => {
  const form = useRef();

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
  };

  return (
    <>
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
                name="user_name"
              />
              <label>Email</label>
              <TextField
                fullWidth
                id="outlined-required"
                type="email"
                name="user_email"
              />
              <label>Message</label>
              <TextField fullWidth id="outlined-required" name="message" />
              <button className="button" type="submit" value="Send">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
