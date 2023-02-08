import Hastag from "../../assets/Hastag.svg";
import Line from "../../assets/Line2.svg";

import Countdown from "../../assets/Countdown.png";

import "./styles.css";

import { Cards } from "../Cards";

export function Projects() {
  return (
    <div className="main-projects">
      <div className="title-projects">
        <label className="title-projects-label">
          <div className="group-title">
            <img className="title-hastag" src={Hastag} />
            projects
          </div>
          <img src={Line} />
        </label>
        <a className="link-projects">View all ~~&gt;</a>
      </div>
      <Cards
        image={Countdown}
        tools="HTML CSS JavaScript"
        nameProj="Countdown"
        description="Regressive counter"
        link="http://countdown-victor.netlify.app"
      />
    </div>
  );
}
