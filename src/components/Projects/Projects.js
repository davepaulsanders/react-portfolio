import React from "react";
import "./Projects.css";
const github = require("../../assets/github.png");
const www = require("../../assets/www.png");

const Projects = () => {
  const projects = [
    {
      id: "gigSocial",
      title: "gigSocial",
      src: require("../../assets/gigSocial.png"),
      description: "An app to help musicians organize their live sets",
      github: "https://github.com/davepaulsanders/gigSocial",
      liveSite: "https://gigsocial.herokuapp.com/",
    },
    {
      id: "tech-nically",
      title: "Tech-nically",
      src: require("../../assets/tech-nically.png"),
      description: "A tech blog built with the Sequelize ORM",
      github: "https://github.com/davepaulsanders/Tech-nically",
      liveSite: "https://tech-nically.herokuapp.com/",
    },
    {
      id: "grade-gatsby",
      title: "The Grade Gatsby",
      src: require("../../assets/grade-gatsby.png"),
      description:
        "A grading portal for elementary school teachers and students",
      github: "https://github.com/britbolt/grade-gatsby",
      liveSite: "https://grade-gatsby.herokuapp.com/",
    },
    {
      id: "nba-live",
      title: "NBA Live Scores",
      src: require("../../assets/nba.png"),
      description:
        "A live score tracker for daily NBA games that shows the highest scorer on each team",
      github: "https://github.com/davepaulsanders/NBA-SCORES-AND-STATS",
      liveSite: "https://nba-games.netlify.app/",
    },
    {
      id: "employee-tracker",
      title: "Employee Tracker",
      src: require("../../assets/employee-tracker.png"),
      description:
        "A node application that allows a manger to add new departments, roles, and employees to a SQL database",
      github: "https://github.com/davepaulsanders/Employee-Tracker",
    },
    {
      id: "nba-standings",
      title: "NBA Standings Scraper",
      src: require("../../assets/nba-standings.png"),
      description:
        "A simple scraper to get NBA regular season standings data that isn't available in the the free ballislife API",
      github: "https://github.com/davepaulsanders/nba-standings-scraper",
    },
    {
      id: "weather",
      title: "Weather Dashboard",
      src: require("../../assets/weather-dashboard.png"),
      description: "A simple weather dashboard",
      github: "https://github.com/davepaulsanders/Weather-Dashboard",
      liveSite: "https://davepaulsanders.github.io/Weather-Dashboard/",
    },
  ];

  return (
    <div className="container">
      <h2 className="projects-title w-100 text-center">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <div
              className="project-card card"
              id={project.id}
              key={project.title}
            >
              <img
                className="card-img-top"
                src={project.src}
                alt={project.title}
              />
              <div
                className={
                  project.liveSite
                    ? "card-body"
                    : "card-body adjusted-for-no-live"
                }
              >
                <p className="card-text single-project-title">
                  {project.title}
                </p>
                {project.liveSite ? (
                  <div className="link-to-site justify-content-between">
                    <a href={project.github}>
                      <img className="link-images" src={github} alt="github" />
                      or
                    </a>
                    <a href={project.liveSite}>
                      <img className="link-images" src={www} alt="live site" />
                    </a>
                  </div>
                ) : (
                  <div className="link-to-site justify-content-between">
                    <a href={project.github}>
                      <img
                        className="link-images link-images-no-live"
                        src={github}
                        alt="github"
                      />
                    </a>
                  </div>
                )}
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
