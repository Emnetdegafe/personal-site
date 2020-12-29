import React, { useState } from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {

  // const [show, setShow] = useState("");



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
