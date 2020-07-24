import React, { Component } from "react";
import "../styles/Home.css";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={require("../images/jim2.png")} />
        <h1>Jim Halpert</h1>
        <h4>"There is so much I have to warm you about."</h4>
        <h5>-Jim Halpert</h5>
      </div>
    );
  }
}

export default Home;
