import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="icon-size">
          <a href="tel:816-678-1651">
            <span className="icon">
              <i className="fas fa-phone"></i>
            </span>
          </a>
        </div>

        <div className="icon-size">
          <a href="mailto:hammondpamelac@gmail.com">
            <span className="icon">
              <i className="fas fa-at"></i>
            </span>
          </a>
        </div>

        <div className="icon-size">
          <a href="https://github.com/PamtheHam">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
          </a>
        </div>

        <div className="icon-size">
          <a href="https://www.linkedin.com/in/pamelahammond94/">
            <span className="icon">
              <i className="fab fa-linkedin-in"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
