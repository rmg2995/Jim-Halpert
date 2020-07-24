import React, { Component } from "react";
import "../styles/AboutMe.css";
class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-main">
        <div>
          <h1>About</h1>
          <p>
            Jim is also in sales and is considered to be one of the "heroes" of
            the show because of his laid back attitude and ability to get along
            with people. During the course of the series, Jim marries Pam
            Beasley and subsequently becomes quite motivated to succeed as a
            paper salesman. There are many instances in The Office where Jim
            spends very little time attempting to increase his paper sales
            instead spending considerable time trying to win the affections of
            Pam. Jim also spends an inordinate amount of time playing tricks on
            Dwight or entertaining his co-workers which he primarily does to
            entertain Pam. Several videos on the site demonstrate how Jim's work
            ethic is reflected by the incentive structure the company has in
            place.
          </p>
        </div>
        <div className="small-pic">
          <img src={require("../images/aboutjim1.png")} />
          <img src={require("../images/aboutjim2.jpg")} />
          <img src={require("../images/aboutjim3.png")} />
        </div>
      </div>
    );
  }
}

export default AboutMe;
