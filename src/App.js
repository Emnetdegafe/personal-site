import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../src/components/Home";
import About from "../src/components/About";
import projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Navigation from "./components/Navbar";
import { Container, Row , Col} from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={projects} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
