import React from "react";
import "./Projects.scss";
import { useParams } from "react-router-dom";



export default function Projects() {
  const param = useParams();

  const projects = [{
    projectName: " AllesOverFilm",
    gitLink: "https://github.com/Emnetdegafe/allesOverFilm-client",
    discription: " A React Native app with bar code reader functionality used to compare prices of BluRays and DVDs with online stores.",
    tech: "react-native, node.js, express, Expo, PostgreSQL, Sequalize, RESTful Apis",
    imageUrl: "../../images/AllesOverFilm.jpg"
  }, {
    projectName: " FlashCards Learning Tool",
    gitLink: "https://flashcard-learning-tool.netlify.app/",
    discription: "A learning tool to help students study using flash cards. It also has a Q and A game like function to help them remember content of their subjects.",
    tech: "React, React-Redux, SASS, CSS",
    imageUrl: "../../images/FlashCard.jpg"
  },
  {
    projectName: " The Idealists",
    gitLink: "https://imaengine.io/CofounderStart",
    discription: "I worked with a team of 5 to add a co-founder section of their existing plateform that turns selected ideas into future companies.",
    tech: "React, TypeORMs, StyledComponents, Material UI",
    imageUrl: "../../images/Idealists.png"
  },
  ]
  return (

    <div className="projects-container">
      <h4 className="About-intro">projects</h4>
      <div className="projects-wrapper">
        {projects.map((project, index) => {

          return (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-front">
                    <h4>{project.projectName}</h4>
                    <img
                      className="project-img"
                      src={project.imageUrl}
                      alt="AllesOverFilm"
                    />
                  </div>
                  <div className="card-back">
                    <h4 className="caption-title">Discription</h4>
                    <p>{project.discription}</p>
                    <span>Tech: {project.tech}</span>
                  </div>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
