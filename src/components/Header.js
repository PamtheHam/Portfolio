import React from "react";
import { Avatar } from "@mui/material";
import PamAvatar from "./assets/Avatar.jpg";
import { Link } from "@mui/material";
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
          <Link href="#about" underline="none" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link href="#skills" underline="none" className="nav-link">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#projects" underline="none" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#education" underline="none" className="nav-link">
            Education
          </Link>
        </li>
        <li>
          <ContactUs />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
