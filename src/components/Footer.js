import React from "react";

const Footer = () => {
  return (
    <div className="footers">
      <ul className="footer-ul">
        <li className="footer-link">
          <a href="tel:816-678-1651">
            <p>Phone:</p> <span>(816) 678-1651</span>
          </a>
        </li>
        <li className="footer-link">
          <a href="https://github.com/PamtheHam">
            <p>GitHub:</p> <span>https://github.com/PamtheHam</span>
          </a>
        </li>
        <li className="footer-link">
          <a href="https://www.linkedin.com/in/pamelahammond94/">
            <p>LinkedIn:</p>{" "}
            <span>https://www.linkedin.com/in/pamelahammond94</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
