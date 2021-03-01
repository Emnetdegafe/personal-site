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
            Thanks for dropping by!<br />
            Emnet here, a frontend developer with background in communications and media.
            I'm a frontend enthusiast with solution oriented mindset, constantly looking for new challenges. Got cool idea we can work together on ? drop me a line or let's get connected!

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
              <span><img class="logos"src="images/logos/react.png"/></span>
              <span><img class="logos"src="images/logos/redux1.png"/></span>
              <span><img class="logos"src="images/logos/HTML.png"/></span>
              <span><img class="logos"src="images/logos/CSS3.png"/></span>
              <span><img class="logos"src="images/logos/logo.svg"/></span>
              <span><img class="logos"src="images/logos/Postgresql.png"/></span>
              <span><img class="logos"src="images/logos/js.png"/></span>
              <span><img class="logos" src="images/logos/GitHub.png"/></span>
              <span><img class="logos" src="images/logos/sass.png"/></span>

            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Contact />
    </section>
  );
}
