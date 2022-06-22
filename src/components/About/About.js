import React from "react";
import "./About.css";
const smallHeadshot = require("../../assets/small-headshot.jpeg");
const largeHeadshot = require("../../assets/large-headshot.jpeg");

const Hero = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center p-4">
      <div>
        <h2 className="about-hero pb-4">
          Full Stack Web Developer from Washington D.C.
        </h2>
      </div>
      <div className="about-pic-para justify-content-center align-items-center w-75">
        <img src={smallHeadshot} alt="Dave Sanders Headshot" />
        <div className="about-info">
          <p>
            Full stack web developer applying orchestra training and university
            background to build projects that make tasks easier. Recently earned
            a certificate in full stack development from George Washington
            University.
          </p>
          <div className="logos-container">
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
