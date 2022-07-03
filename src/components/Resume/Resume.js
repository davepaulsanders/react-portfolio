import React, { useState } from "react";
import "./Resume.css";
const Resume = () => {
  const skills = [
    "Comfortable building React apps with hooks and state mananagement using Context",
    "Building back end applications and routing through node",
  ];
  const [skillText, setSkillText] = useState(skills[0]);

  const skillsImages = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      name: "react",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      name: "node",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      name: "express",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      name: "mongo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
      name: "mysql",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      name: "tailwind",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
      name: "bootstrap",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
      name: "git",
    },
  ];

  const handleSkillClick = (e) => {
    e.preventDefault();
    const index = e.target.getAttribute("data-index");
    setSkillText(skills[index]);
  };
  return (
    <div className="resume-info d-flex justify-content-center align-items-center flex-column p-4 w-100">
      <h2 className="skills-title">Skills & Resume</h2>
      <div className="skills-container">
        {skillsImages.map((skill, i) => {
          return (
            <img
              className="skill-icons"
              src={skill.src}
              alt={skill.name}
              key={skill.name}
              data-index={i}
              onClick={handleSkillClick}
            />
          );
        })}
      </div>
      <div className="skills-extra-info p-3 shadow-sm">
        <p className="skills-text">{skillText}</p>
      </div>
    </div>
  );
};

export default Resume;
