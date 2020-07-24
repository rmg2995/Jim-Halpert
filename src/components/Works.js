import React, { Component } from "react";
import "../styles/Works.css";
class Works extends Component {
  render() {
    return (
      <div>
        <img src={require("../images/cast.jpg")} />
        <div>
          <h3>How We Work</h3>
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
          <iframe
            width="893"
            height="502"
            src="https://www.youtube.com/embed/R_CYkvXdYXE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          ;
        </div>
        <div>
          <img />
          <h5>Paper</h5>
          <p>Paper p</p>
          <img />
          <h5>Printers</h5>
          <p>Printers p</p>
        </div>
        <h5>Join Our Newsletter</h5>
        <button>Subscribe</button>
      </div>
    );
  }
}

export default Works;
