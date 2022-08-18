import React from "react";
import "./Resume.css";
const resume = require("../../assets/resume.png");
const Resume = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="resume-title text-center">Resume</h2>
      <a
        className="resume-href"
        target="_blank"
        href="https://docs.google.com/document/d/1Rttr3416pdlZfOa8-m2_sZzLdJqfDTLG/edit?usp=sharing&ouid=104980387569003616870&rtpof=true&sd=true"
      >
        <button className="resume-link d-block btn btn-primary">
          Download <img className="resume-icon" src={resume} alt="resume" />
        </button>
      </a>
    </div>
  );
};

export default Resume;
