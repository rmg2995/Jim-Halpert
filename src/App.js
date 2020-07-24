import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/aboutme" render={() => <AboutMe />} />
        <Route exact path="/works" render={() => <Works />} />
        <Route exact path="/contact" render={() => <ContactMe />} />
      </Switch>
    </div>
  );
}

export default App;
