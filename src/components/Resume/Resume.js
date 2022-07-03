import React from "react";
import "./Resume.css";
const Resume = () => {
  return (
    <div className="card w-75 p-2">
      <div className="d-flex flex-column">
        <img
          className="logos"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="react icon"
        />
        <img
          className="logos"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          alt="node icon"
        />
        <img
          className="logos"
          src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
          alt="express icon"
        />

        <img
          className="logos"
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
          alt="mongoDB icon"
        />

        <img
          className="logos"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg"
          alt="mySql icon"
        />

        <img
          className="logos"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          alt="tailwind icon"
        />

        <img
          className="logos"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
          alt="bootstrap icon"
        />

        <img
          className="logos"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
          alt="git icon"
        />
      </div>
    </div>
  );
};

export default Resume;
