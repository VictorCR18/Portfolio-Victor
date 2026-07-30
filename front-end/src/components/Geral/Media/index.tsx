import Discord from "../../../assets/Discord.svg";
import Linkedin from "../../../assets/Linkedin.svg";
import Github from "../../../assets/Github.svg";

import "./styles.css";

export function Media() {
  return (
    <div className="media-link">
      <div className="line-media"></div>
      <div className="media-icons">
        <a
          href="https://github.com/VictorCR18"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icons" src={Github} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/victor-cavalcante-421349198/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icons" src={Linkedin} alt="LinkedIn" />
        </a>
        <a href="#" aria-label="Discord">
          <img className="icons" src={Discord} alt="" />
        </a>
      </div>
    </div>
  );
}
