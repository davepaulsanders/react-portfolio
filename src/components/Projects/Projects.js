import React from "react";
import "./Projects.css";
const technically = require("../../assets/tech-nically.png");

const Projects = () => {
  return (
    <div className="container">
        <h2 className="projects-title w-100 text-center">Projects</h2>
      <div className="row">
        <div className="project-card card">
          <img className="card-img-top" src={technically} alt="technically" />
          <div className="card-body">
            <p className="card-text">
              <span>Technically: </span>A tech blog built with Sequelize
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
