import React from "react";
import "./home.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import { icons } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className='wrapper'>
      <Row>
        <Col>
          <div className="home-container">
            <h2>Emnet Assefa Degafe</h2>
            <h1>Frontend Web Developer</h1>
            <div className="image-wrap">
              {/* <Image src="./pic.png"></Image> */}
            </div>
            <div className="connect-wrap">
              <Link to="https://www.linkedin.com/in/emnetassefadegafe/">
                <FaLinkedin className="linkedin" />
              </Link>
              <Link to="https://github.com/Emnetdegafe">
                <FaGithub className="github" />
              </Link>
            </div>
          </div>
        </Col>
        <Col className='second-col' xs={5}>
          <div className='wrapper-container2'>
            <h3>We are here</h3>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}
