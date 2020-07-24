import React, { Component } from "react";
import "../styles/Works.css";
class Works extends Component {
  render() {
    return (
      <div className="background-image">
        <img className="img" src={require("../images/cast.jpg")} />
        <div className="worksMiddle">
          <div className="worksWords">
            <h3>How We Work</h3>
            <p>
              The company was depicted as based in New York City, with branches
              in smaller Northeastern cities. Episodes are set in the Scranton
              branch, but other branches have been mentioned and seen. The
              now-closed Stamford, Connecticut, branch was seen when Jim Halpert
              (John Krasinski) transferred there during the first half of the
              third season.[9] Another episode, "Branch Wars", gave viewers a
              brief glimpse of the Utica branch, one of several purportedly in
              upstate New York. Zbornak says that city was on the short list for
              where to base the show, with some of its writers having ties to
              Central New York, and that they always intended for at least a
              branch office to be located there, for reasons of phonetics.
              "Utica was just such a different-sounding name than Scranton,"
              Zbornak says. But also, "we had done a little research and thought
              our kind of business could survive in Utica."[7]
            </p>
          </div>
          <iframe
            className="video"
            title="office-video"
            width="893"
            height="502"
            src="https://www.youtube.com/embed/R_CYkvXdYXE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          ;
        </div>
        <div className="printer-paper">
          <div className="dunderwhite">
            <img src={require("../images/dunderwhite.png")} />
            <h5>Paper</h5>
            <p>About the Paper</p>
          </div>
          <div className="dunderblack">
            <img src={require("../images/dunderblack.png")} />
            <h5>Printers</h5>
            <p>About the Printers</p>
          </div>
        </div>
        <div>
          <h5>Join Our Newsletter</h5>
          <button>Subscribe</button>
        </div>
      </div>
    );
  }
}

export default Works;
