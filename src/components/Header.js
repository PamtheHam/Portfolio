import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="header">
      <Container>
        <ul className="header-list">
          <li>
            <Link
              className="nav-links"
              style={{ cursor: "pointer" }}
              id="home-link"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-links"
              style={{ cursor: "pointer" }}
              id="about-link"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav-links"
              style={{ cursor: "pointer" }}
              id="projects-link"
              to="/projects"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="nav-links"
              style={{ cursor: "pointer" }}
              id="contact-link"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default Header;
