import Discord from "../../assets/Discord.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Github from "../../assets/Github.svg";
import Line from "../../assets/Line.svg";

import "./styles.css";

export function Media() {
  return (
    <div className="media-link">
      <a className="line">
        <img src={Line} />
      </a>
      <a href="https://github.com/VictorCR18">
        <img src={Github} />
      </a>
      <a href="https://www.linkedin.com/in/victor-cavalvante-421349198/">
        <img src={Linkedin} />
      </a>
      <a>
        <img src={Discord} />
      </a>
    </div>
  );
}
