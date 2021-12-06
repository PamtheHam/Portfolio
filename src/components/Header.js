import React from "react";
import { Avatar } from "@mui/material";
import PamAvatar from "./assets/Avatar.jpg";
import ContactUs from "./ContactForm";

function Header() {
  return (
    <nav className="navbar">
      <Avatar
        alt="Pamela Hammond"
        src={PamAvatar}
        sx={{ width: 60, height: 60 }}
        variant="square"
      />
      <ul>
        <li>
          <a href="#about" underline="none" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#skills" underline="none" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" underline="none" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#education" underline="none" className="nav-link">
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
