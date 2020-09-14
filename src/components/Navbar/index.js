import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const HorizontalLine = ({ color }) => (
  <hr
    style={{
      borderTopColor: "black",
      borderTopWidth:1,
      marginInlineStart: 500,
    }}
  />
);

export default function Navigation() {
  return (
    <div>
      <Navbar className="navbar">
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
      </Navbar>
      <HorizontalLine />
    </div>
  );
}
