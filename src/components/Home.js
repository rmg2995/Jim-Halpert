import React, { Component } from "react";
import "../styles/Home.css";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="img-home">
          <img src={require("../images/jim2.png")} />
        </div>
        <div className="container">
          {/* <h1>Jim Halpert</h1> */}
          <h2>"There is so much I have to warm you about."</h2>
          <h4>-Jim Halpert</h4>
        </div>
      </div>
    );
  }
}

export default Home;
