import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex justify-content-center align-items-center">
        <p>reachOut ( ) =></p>
        <a href="https://github.com/davepaulsanders">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/davepsanders/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
            alt="linkedin"
          />
        </a>
        <a href="https://davepsanders.bandcamp.com/releases">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Bandcamp-button-circle-aqua.svg"
            alt="bandcamp"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
