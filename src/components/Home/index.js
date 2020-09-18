import React from "react";
import "./home.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import { icons } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Projects from "../../components/Projects/index";
import Contact from "../../components/Contact/index"

export default function Home() {
  return (
    <div className="home-container">
      <h3>Emnet Assefa Degafe</h3>
      <h2>Frontend Web Developer</h2>
      <div className='profile-wrap'>
        <div className="image-wrap">
          {/* <Image src="./pic.png"></Image> */}
        </div>
        <div className="connect-wrap">
          <a href="https://www.linkedin.com/in/emnetassefadegafe/">
            <FaLinkedin className="linkedin" />
          </a>
          <a href="//github.com/Emnetdegafe">
            <FaGithub className="github" />
          </a>
        </div>
      </div>
      <Projects />
      <Contact />
    </div>
  );
}
