import Countdown from "../../assets/Countdown.png";
import LoginForm from "../../assets/Login-Form-CSS.png";

import "./styles.css";

import { Cards } from "../Cards";
import { Titles } from "../Titles";

export function Projects() {
  return (
    <div className="main-projects">
      <div className="title-projects">
        <label className="title-projects-label">
          <Titles symbol="#" title="projects" />
          <div className="bar-projects"></div>
        </label>
        <a className="link-projects">View all ~~&gt;</a>
      </div>
      <div className="Cards">
        <Cards
          image={Countdown}
          tools="HTML CSS JavaScript"
          nameProj="Countdown"
          description="Regressive counter"
          link="http://countdown-victor.netlify.app"
        />
        <Cards
          image={LoginForm}
          tools="HTML CSS"
          nameProj="Camp.in"
          description="Login screen"
          link="http://campin-victor.netlify.app"
        />
      </div>
    </div>
  );
}
