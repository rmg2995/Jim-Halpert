import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
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
