import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="tel:816-678-1651">
            <p className="footer-link">Phone:</p> (816) 678-1651
          </a>
        </li>
        <li>
          <a href="mailto:hammondpamelac@gmail.com">
            <p className="footer-link">Email:</p> Hammondpamelac@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/PamtheHam">
            <p className="footer-link">GitHub:</p> https://github.com/PamtheHam
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pamelahammond94/">
            <p className="footer-link">LinkedIn:</p>{" "}
            https://www.linkedin.com/in/pamelahammond94
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
