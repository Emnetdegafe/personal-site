import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Projects.scss";
import { useParams } from "react-router-dom";

export default function Projects() {
  const param = useParams();
  console.log("params", param);

  // const HorizontalLine = () => (
  //   <hr
  //     style={{
  //       color: "white",
  //       width: 2
  //             // marginInlineStart: 500,
  //     }}
  //   />
  // );
  return (
    <div className="project-container">
      <h3>projects</h3>
      {/* <hr style={{ color: "white", height: "2px" , width: "100%"}} /> */}
      {/* {param === "projects" ? <hr style={{color: "white", width: "2px"}}/> : null} */}
      <Carousel className="slide">
        <Carousel.Item>
          <a
            href="https://github.com/Emnetdegafe/allesOverFilm-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project1"
              src="images/AllesOVerFilm-CoverPage.png"
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
            <h4>Flash Card App</h4>
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
            <h4>Personal Site</h4>
            <p>personal portfolio site made using React, SCSS and CSS.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
