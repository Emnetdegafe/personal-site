import React from "react";
import { Carousel } from "react-bootstrap";
// import "./AllesOverFilm.jpg"
import "./Projects.scss";

export default function Projects() {
  return (
    <div className="project-container">
      <h3>project</h3>
      <Carousel className="slide">
        <Carousel.Item>
          <a href="https://github.com/Emnetdegafe/allesOverFilm-client">
            <img
              className="project1"
              src="images/AllesOverFilm.jpg"
              alt="AllesOverFilm"
            />
          </a>
          <Carousel.Caption>
            <h4>AllesOverFilm Mobile App</h4>
            <p>
              Mobile app with bar code functionality used to compare prices of
              items with online stores.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://fervent-hugle-a9038a.netlify.app/">
            <img
              className="project2"
              src={"/images/FlashCard.jpg"}
              alt="Flash Card learning tool"
            />
          </a>

          <Carousel.Caption>
            <h4>Flash Card App</h4>
            <p>
              Learning tool to help students study using flash cards. It also
              have a Q and A game like function to help them remember
              content of their subjects.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="project3"
            src="images/Own_site.jpg"
            alt="Personal Site"
          />

          <Carousel.Caption>
            <h4>Personal Site</h4>
            <p>personal portfolio site made using React, SCSS and CSS.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
