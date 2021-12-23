import React from "react";
import Box from "@mui/material/Box";
import ContactUs from "./ContactForm";

function Header({ currentPage, handlePageChange }) {
  return (
    <Box className="header">
      <ul className="nav justify-content-center">
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
    </Box>
  );
}

export default Header;
