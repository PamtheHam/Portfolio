import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link footer-link" href="tel:816-678-1651">
              <span className="icon">
                <i className="fas fa-phone"></i>
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link footer-link"
              href="https://github.com/PamtheHam"
            >
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link footer-link"
              href="https://www.linkedin.com/in/pamelahammond94/"
            >
              <span className="icon">
                <i className="fab fa-linkedin-in"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
