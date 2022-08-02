import React from "react";
import "./Resume.css";
const resume = require("../../assets/resume.png");
const Resume = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="resume-title text-center">Resume</h2>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/11O3VWVLkBoGccaZNRg5fWTp6dISA-pvD/view?usp=sharing"
      >
        <button className="resume-link d-block btn btn-primary">
          Download <img className="resume-icon" src={resume} alt="resume" />
        </button>
      </a>
    </div>
  );
};

export default Resume;
