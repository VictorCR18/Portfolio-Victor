import Hastag from "../../assets/Hastag.svg";
import Line from "../../assets/Line2.svg";

import "./styles.css";

export function Projects() {
  return (
    <div className="main-projects">
      <div className="title-projects">
        <label className="title-projects-label">
          <img className="title-hastag" src={Hastag} />projects
        </label>
        <img src={Line} />
      </div>
    </div>
  );
}
