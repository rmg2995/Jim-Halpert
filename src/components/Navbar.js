import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav-link">
          <Link to="/">
            <h1>JH</h1>
          </Link>
          <Link to="/aboutme">Big Tuna</Link>
          <Link to="/works">Works</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
