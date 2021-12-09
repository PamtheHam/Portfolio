import React from "react";
import { Avatar } from "@mui/material";
import PamAvatar from "./assets/Avatar.jpg";
import ContactUs from "./ContactForm";

function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <Avatar
        alt="Pamela Hammond"
        src={PamAvatar}
        sx={{
          width: 100,
          height: 100,
        }}
        variant="square"
      />
      <ul>
        <li>
          <a
            href="#about"
            className="nav-link"
            onClick={() => handlePageChange("About")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="nav-link"
            onClick={() => handlePageChange("Skills")}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="nav-link"
            onClick={() => handlePageChange("Projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="nav-link"
            onClick={() => handlePageChange("Education")}
          >
            Education
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
