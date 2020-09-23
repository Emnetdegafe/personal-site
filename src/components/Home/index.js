import React from "react";
import "./home.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import { icons } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Projects from "../../components/Projects/index";
import Contact from "../../components/Contact/index";

export default function Home() {
  return (
    <div className="home-container">
      <h4 className="About-intro">About Me</h4>
      <h3 className='me-name'>Emnet Assefa Degafe</h3>
      <h5 className='title-text'>Frontend Web Developer</h5>
      <div className="profile-wrap">
        <Image
          className="Image"
          src="https://pbs.twimg.com/profile_images/541675965840367617/r4CIPwnj.jpeg"
        />

        <div className="connect-wrap">
          <p className="connect-text">
            Hi, welcome to my portfolio site! <br />I am a communications and
            media professional turned to a full-stack web development. I am
            anylitical and entusistinc person with solution oriented mind set. I
            belive the sky is the limit when it comes to learning. I am a
            motivated web developer constantly looking for the next new
            challenge so I can grow professionally and mentally. Head to
            Linkedin, if you'd like to see my professional expereince. You can
            find the code for my projects on github.
          </p>

          <a href="https://www.linkedin.com/in/emnetassefadegafe/">
            <FaLinkedin className="linkedin" />
          </a>
          <a href="//github.com/Emnetdegafe">
            <FaGithub className="github" />
          </a>
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
      <Projects />
      <Contact />
    </div>
  );
}
