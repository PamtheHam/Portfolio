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
        sx={{
          width: 100,
          height: 100,
        }}
        variant="square"
      />
      <a href="#about" className="nav-link">
        About
      </a>
      <a href="#skills" className="nav-link">
        Skills
      </a>
      <a href="#projects" className="nav-link">
        Projects
      </a>
      <a href="#education" className="nav-link">
        Education
      </a>
      <ContactUs />
    </nav>
  );
}

export default Header;
