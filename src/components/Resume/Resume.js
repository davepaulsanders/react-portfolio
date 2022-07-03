import React from "react";
import "./Resume.css";
const resume = require("../../assets/resume.png");
const Resume = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h2 className="resume-title text-center">Resume</h2>
      <iframe
        width="780"
        height="1000"
        src="https://docs.google.com/document/d/e/2PACX-1vR--kEgCaoY8xdJdcFx3CBLa-MwZXXzQgLl3uQHPuFzJ_3g9IlGwR5VC6t2jkVPVw/pub?embedded=true"
      ></iframe>
      <button
        className="resume-download btn btn-primary"
        onClick={() =>
          (window.location.href =
            "https://drive.google.com/file/d/11O3VWVLkBoGccaZNRg5fWTp6dISA-pvD/view?usp=sharing")
        }
      >
        Resume <img className="resume-icon" src={resume} alt="resume" />
      </button>
    </div>
  );
};

export default Resume;
