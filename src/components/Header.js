import React from "react";
import { Avatar } from "@mui/material";
import PamHeadshot from "./assets/Headshot.jpg";
import ContactUs from "./ContactForm";

function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="header">
      {/* <Avatar
        alt="Pamela Hammond"
        src={PamAvatar}
        sx={{
          width: 100,
          height: 100,
        }}
        variant="square"
      /> */}
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
    </nav>
  );
}

export default Header;
