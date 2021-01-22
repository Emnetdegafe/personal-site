import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../src/components/Home";
import projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Navigation from "./components/Navbar";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import Success from "./components/Contact/Success";

function App() {
  return (
    <div className='main-container'>
      <header className="header">
        <Navigation />
        <h2 className="me-name">Emnet Assefa Degafe</h2>
        <h5 className="title-text">Frontend Web Developer</h5>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog" component={Blog} />
        <Route path="/success" component={Success}/>
      </Switch>
      <footer className="footer">
        <p> &copy;2020 emnetdegafe</p>
      </footer>
    </div>
  );
}

export default App;
