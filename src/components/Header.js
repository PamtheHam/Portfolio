import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "@mui/material";

function Header({ currentPage, handlePageChange }) {
  return (
    <Navbar className="header ">
      <Container>
        <ul className="header-list">
          <li>
            <a
              href="#home"
              className="nav-links"
              style={{ cursor: "pointer" }}
              id="home-link"
              onClick={() => handlePageChange("Home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-links"
              style={{ cursor: "pointer" }}
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
              style={{ cursor: "pointer" }}
              id="projects-link"
              onClick={() => handlePageChange("Projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-links"
              style={{ cursor: "pointer" }}
              id="contact-link"
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default Header;
