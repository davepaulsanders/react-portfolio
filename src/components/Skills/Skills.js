import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "• Developing front end applications\n• Using JWT in the front end for authentication",
    "• Using express in collaberation with Node to serve webpages and databases\n• Dynamically writing HTML files from CLI prompts",
    "• Creating servers using express sessiona dn cookies for authentication\n• Deploying express servers with Heroku",
    "• Building back end using Mongoose ODM\n• Deploying with MongoDB Atlas",
    "• Implementing relation databases\n• Building back end using Sequelize ORM",
    "• Building an API with typeDefs and resolvers\n• Using Apollo to communicate with Graphql on the front end",
    "• Building custom components with utility classes",
    "• Building sites using Bootstrap components and validations\n• Bootstrap grid",
    "• Using git versioning system\n• Collaborating with multiple developers in a repo",
  ];
  const [skillText, setSkillText] = useState(skills[0]);

  const skillsImages = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      name: "react",
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      name: "node",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      name: "express",
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      name: "mongo",
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
      name: "mysql",
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
      name: "graphql",
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      name: "tailwind",
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
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
    const container = document.querySelector(".skills-extra-info");
    const skillsText = document.querySelector(".skills-text");
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
              className={`skill-icons`}
              src={skill.src}
              alt={skill.name}
              key={skill.name}
              data-index={i}
              onClick={handleSkillClick}
            />
          );
        })}
      </div>
      <div className="skills-extra-info wipe d-flex p-3">
        <p className="skills-text text-appear">{skillText}</p>
      </div>
    </div>
  );
};

export default Skills;
