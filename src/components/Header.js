import React from "react";
import "materialize-css";

function Header() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
