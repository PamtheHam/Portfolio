import React from "react";
import { Container } from "@mui/material";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar className="footers">
      <Container>
        <ul>
          <li className="footer-link">
            <a href="tel:816-678-1651">
              <span className="icon">
                <i className="fas fa-phone"></i>
              </span>
            </a>
          </li>
          <li className="footer-link">
            <a href="https://github.com/PamtheHam">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
            </a>
          </li>
          <li className="footer-link">
            <a href="https://www.linkedin.com/in/pamelahammond94/">
              <span className="icon">
                <i className="fab fa-linkedin-in"></i>
              </span>
            </a>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};

export default Footer;
