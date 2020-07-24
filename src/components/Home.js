import React, { Component } from "react";
import "../styles/Home.css";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Jim Halpert</h1>
        <h4>"blahblahblah"</h4>
        {/* <img
          src={require("../components/images/marjanblan-_kUxT8WkoeY-unsplash.jpg")}
        />  */}
      </div>
    );
  }
}

export default Home;
