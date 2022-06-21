import React from "react";
import "./About.css";
const headshot = require('../../assets/small-headshot.jpeg')

const Hero = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center p-4">
      <h2 className="about-hero pb-4">
        Full Stack Web Developer from Washington D.C.
      </h2>
      <img
        src={headshot}
        alt="Dave Sanders headshot"
      />
      <p>
        Dave has done lots of things, but I'm not totally sure what 
        I'm going to put in here right now.  I don't think it should be 
        too long but it definitely should be on the side at full screen.
      </p>
    </div>
  );
};

export default Hero;
