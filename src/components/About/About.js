import React from "react";
import "./About.css";
const smallHeadshot = require("../../assets/small-headshot.jpeg");

const Hero = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center p-4">
      <div className="d-flex justify-content-center">
        <h2 className="about-hero pb-4">
          Full Stack Web Developer from Washington D.C.
        </h2>
      </div>
      <div className="about-pic-para justify-content-center align-items-center w-75">
        <img
          className="headshot"
          src={smallHeadshot}
          alt="Dave Sanders Headshot"
        />
        <div className="about-info w-100">
          <p>
            Full stack web developer applying orchestra training and university
            background to build projects that make tasks easier. Recently earned
            a certificate in full stack development from George Washington
            University.
          </p>
          <div className="logos-container d-flex justify-content-center">
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="react icon"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
              alt="html icon"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              alt="javascript icon"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
              alt="css icon"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              alt="bootstrap icon"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="tailwind icon"
            />
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
              alt="git icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
