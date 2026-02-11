import Countdown from "../../../assets/Countdown.png";
import LoginForm from "../../../assets/Login-Form-CSS.png";

import "./styles.css";

import { Card } from "../../Geral/Card";
import { Titles } from "../../Geral/Titles";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <div className="main-projects">
      <div className="title-projects">
        <label className="title-projects-label">
          <Titles symbol="#" title="projects" />
          <div className="bar-projects"></div>
        </label>
        <Link to="/works" className="link-projects">View all ~~&gt;</Link>
      </div>
      <div className="Cards">
        <Card
          image={Countdown}
          tools="HTML CSS JavaScript"
          nameProj="Countdown"
          description="Regressive counter"
          link="http://countdown-victor.netlify.app"
        />
        <Card
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
