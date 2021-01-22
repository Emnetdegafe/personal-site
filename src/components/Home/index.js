import React from "react";
import "./home.scss";
import { Image } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Projects from "../../components/Projects/index";
import Contact from "../../components/Contact/index";

export default function Home() {
  return (
    <section className="home-container">
      <div className="titles">
        <h4 className="About-intro">About Me</h4>

      </div>
      <div className="profile-wrap">
        <Image
          className="Image"
          src="https://pbs.twimg.com/profile_images/541675965840367617/r4CIPwnj.jpeg"
        />

        <div id="connect-wrap">
          <h3>Hi there,</h3>
          <p className="connect-text">
            welcome to my portfolio site! Thanks for dropping by!<br />
            Emnet here, a frontend developer with background in communications and media.
            I am a frontend enthusiast with solution oriented mindset. I am constantly looking for new challenges so I
            can grow professionally and personally. I believe the sky is the limit when it comes to learning. So if you have a cool idea we can work on together, drop me a line.
            Head to my LinkedIn page, if you'd like to see my professional experience. You can
            find the code for my projects on github.

          </p>
          <div className="gitLink">
            <a
              href="https://www.linkedin.com/in/emnetassefadegafe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://www.github.com/Emnetdegafe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="github" />
            </a>
          </div>
          <div className="skills-wrap">
            <h3>Skills</h3>
            <div className="skills">
              <span>React + Redux</span>
              <span>React native</span>
              <span>Rest-APIs</span>
              <span>Express</span>
              <span>Sequelize</span>
              <span>NodeJS</span>
              <span>PostgreSQL</span>
              <span>Javascript</span>
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Contact />
    </section>
  );
}
