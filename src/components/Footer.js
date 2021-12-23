import React from "react";

const Footer = () => {
  return (
    <div className="custom-footer">
      <ul className="footer-ul nav">
        <li className="footer-link">
          <a href="tel:816-678-1651">
            <span className="icon">
              <i className="fas fa-phone"></i>
            </span>
          </a>
        </li>
        <li className="footer-link">
          <a href="https://github.com/PamtheHam">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
          </a>
        </li>
        <li className="footer-link">
          <a href="https://www.linkedin.com/in/pamelahammond94/">
            <span className="icon">
              <i className="fab fa-linkedin-in"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
