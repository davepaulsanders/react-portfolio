import React, { useState } from "react";
import "./Skills.css";
const { skills, skillsImages } = require("./skillsdata");
const Skills = () => {
  const [skillText, setSkillText] = useState(skills[0]);
  const [activeSkill, setActiveSkill] = useState(skillsImages[0]);

  const handleSkillClick = (e) => {
    e.preventDefault();
    const index = e.target.getAttribute("data-index");
    const container = document.querySelector(".skills-extra-info");
    const skillsText = document.querySelector(".skills-text");

    setActiveSkill(skillsImages[index]);
    setSkillText(skills[index]);
    container.classList.remove("wipe");
    skillsText.classList.remove("text-appear");
    skillsText.classList.remove("text-appear-2");
    // Remove delay from initial page load
    container.style.animationDelay = "0s";
    setTimeout(() => container.classList.add("wipe"), 1);
    skillsText.animationDelay = "0s";
    setTimeout(() => skillsText.classList.add("text-appear-2"), 1);
  };
  return (
    <div className="skills-info d-flex justify-content-center align-items-center flex-column w-100">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skillsImages.map((skill, i) => {
          return (
            <img
              className={
                skill.name === activeSkill.name ? "active-skill" : "skill-icons"
              }
              src={skill.src}
              alt={skill.name}
              key={skill.name}
              data-index={i}
              onClick={handleSkillClick}
            />
          );
        })}
      </div>
      <p className="skill-selection wipe2 align-self-start ms-4 mb-1">{activeSkill.name}</p>
      <div className="skills-extra-info wipe d-flex p-3">
        <p className="skills-text text-appear">{skillText}</p>
      </div>
    </div>
  );
};

export default Skills;
