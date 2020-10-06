import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Projects.scss";
import { useParams } from "react-router-dom";

export default function Projects() {
  const param = useParams();
  console.log("params", param);

  return (
    <div className="project-container">
      <h4 className="About-intro">projects</h4>
      <Carousel>
        <Carousel.Item>
          <a
            href="https://github.com/Emnetdegafe/allesOverFilm-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project1"
              src="images/AllesOverFilm.jpg"
              alt="AllesOverFilm"
            />
          </a>
          <Carousel.Caption>
            <h4 className="caption-title">AllesOverFilm Mobile App</h4>
            <p>
              Mobile app with bar code functionality used to compare prices of
              items with online stores.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a
            href="https://fervent-hugle-a9038a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project2"
              src={"/images/FlashCard.jpg"}
              alt="Flash Card learning tool"
            />
          </a>

          <Carousel.Caption>
            <h4 className="caption-title">Flash Card App</h4>
            <p>
              Learning tool to help students study using flash cards. It also
              have a Q and A game like function to help them remember content of
              their subjects.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a
            herf="https://mystifying-newton-a39828.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project3"
              src="images/Own_site.jpg"
              alt="Personal Site"
            />
          </a>

          <Carousel.Caption>
            <h4 className="caption-title">Personal Site</h4>
            <p>personal portfolio site made using React, SCSS and CSS.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
