import React from "react";
import ContactUs from "./ContactForm";
import { Navbar } from "react-bootstrap";
import { Container } from "@mui/material";

function Header({ currentPage, handlePageChange }) {
  return (
    <Navbar className="header ">
      <Container>
        <ul>
          <li>
            <a
              href="#about"
              className="nav-links"
              id="about-link"
              onClick={() => handlePageChange("About")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="nav-links"
              id="projects-link"
              onClick={() => handlePageChange("Projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <ContactUs />
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default Header;
