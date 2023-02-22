import Discord from "../../assets/Discord.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Github from "../../assets/Github.svg";

import "./styles.css";

export function Media() {
  return (
    <div className="media-link">
      <div className="line"></div>
      <div className="media-icons">
        <a href="https://github.com/VictorCR18">
          <img className="icons" src={Github} />
        </a>
        <a href="https://www.linkedin.com/in/victor-cavalvante-421349198/">
          <img className="icons" src={Linkedin} />
        </a>
        <a>
          <img className="icons" src={Discord} />
        </a>
      </div>
    </div>
  );
}
