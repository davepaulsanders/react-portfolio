import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: "tech-nically",
      title: "Tech-nically",
      src: require("../../assets/tech-nically.png"),
      description: "A tech blog built with the Sequelize ORM",
    },
    {
      id: "grade-gatsby",
      title: "The Grade Gatsby",
      src: require("../../assets/grade-gatsby.png"),
      description:
        "A grading portal for elementary school teachers and students",
    },
    {
      id: "nba-live",
      title: "NBA Live Scores",
      src: require("../../assets/nba.png"),
      description:
        "A live score tracker for daily NBA games that shows the highest scorer on each team",
    },
    {
      id: "employee-tracker",
      title: "Employee Tracker",
      src: require("../../assets/employee-tracker.png"),
      description:
        "A node application that allows a manger to add new departments, roles, and employees to a SQL database",
    },
    {
      id: "nba-standings",
      title: "NBA Standings Scraper",
      src: require("../../assets/nba-standings.png"),
      description:
        "A simple scraper to get NBA regular season standings data that isn't available in the the free ballislife API",
    },
    {
      id: "weather",
      title: "Weather Dashboard",
      src: require("../../assets/weather-dashboard.png"),
      description: "A simple weather dashboard",
    },
  ];

  return (
    <div className="container">
      <h2 className="projects-title w-100 text-center">Projects</h2>
      <div className="projects-container">
      {projects.map((project) => {
        return (
            <div className="project-card card" id={project.id} key={project.title}>
              <img
                className="card-img-top"
                src={project.src}
                alt={project.title}
              />
              <div className="card-body">
                <p className="card-text single-project-title">
                  {project.title}
                </p>
                <p className="card-text card-description">
                  {project.description}
                </p>
              </div>
            </div>
        );
      })}
        </div>
    </div>
  );
};

export default Projects;