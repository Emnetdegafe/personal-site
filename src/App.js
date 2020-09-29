import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../src/components/Home";
import projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Navigation from "./components/Navbar";
import Blog from "./components/Blog";

function App() {
  return (
    <div className='main-container'>
      <header className="header">
        <Navigation />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/Blog" component={Blog} />
      </Switch>
      <footer className="footer">
        <p>@2020</p>
      </footer>
    </div>
  );
}

export default App;
