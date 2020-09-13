import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar className='navbar'>
      {/* <Navbar.Brand as={NavLink} to="/">
        Emnet Assefa Degafe
      </Navbar.Brand> */}
      <Navbar.Toggle />
      <Nav className="mr-auto">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={NavLink} to="/projects">
          projects
        </Nav.Link>
        <Nav.Link as={NavLink} to="/contact">
          contact
        </Nav.Link>
        <Nav.Link as={NavLink} to="/blog">
          blog
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
