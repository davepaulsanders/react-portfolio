import React from "react";
import "./Resume.css";

const resume = require("../../assets/resume.png");
const Resume = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="resume-title text-center">Resume</h2>
      <button className="resume-link d-block btn btn-primary">Download</button>
    </div>
  );
};

export default Resume;
