import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Navigation() {



  return (
    <nav className="navbar">
      <Nav.Link as={NavLink} to="/">
        home
      </Nav.Link>
      <Nav.Link as={NavLink} to="/projects">
        projects
      </Nav.Link>
      <Nav.Link as={NavLink} to="/contact">
        contact
      </Nav.Link>
      <Nav.Link as={NavLink} to="/resume">
        resume
      </Nav.Link>
    </nav>
  );
}
