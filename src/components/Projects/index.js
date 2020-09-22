import React from "react";
import { Carousel } from "react-bootstrap";
import "./Projects.css";
// import "./AllesOverFilm.jpg"

export default function Projects() {
  return (
    <div className="project-container">
      <h3>project</h3>
      <Carousel>
        <Carousel.Item style={{ height: "20rem", width: "100%" }}>
          <img
            className="d-block w-100"
            src="/images/HomeScreen.gif"
            alt="AllesOverFilm"
            style={{ height: "30rem ", padding: "2rem", width: "100%" }}
          />
          <Carousel.Caption>
            <h4>AllesOverFilm - mobile app</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "20rem", width: "100%" }}>
          <img
            className="d-block w-100"
            src={"/images/AllesOverFilm.jpg"}
            alt="Flash Card learning tool"
            style={{ height: "30rem ", padding: "2rem" }}
          />

          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "20rem", padding: "5rem" }}>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
            alt="Personal Site"
            style={{ "height": "30rem ", "padding": "2rem" }}
          />

          <Carousel.Caption>
            <h4>Third slide label</h4>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
