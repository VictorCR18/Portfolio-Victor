import "./styles.css";

import Line from "../../assets/Line3.svg";
import Dots from "../../assets/Dots.svg";
import Rectangle from "../../assets/Rectangle.svg";
import Logo from "../../assets/Logo.svg";

import { Titles } from "../Titles";
import { CardNote } from "../CardNote";

export function Skills() {
  return (
    <div className="main-skills">
      <div className="titles-skills">
        <Titles symbol="#" title="skills" />
        <img src={Line} />
      </div>
      <div className="content-skills">
        <div className="box-pictures">
          <img className="Dots1" src={Dots} />
          <img className="Dots2" src={Dots} />
          <img className="Rectangle1" src={Rectangle} />
          <img className="Rectangle2" src={Rectangle} />
          <img className="Logo2" src={Logo} />
        </div>
        <div className="skills-tools">
          <CardNote
            title="Languages"
            description="JavaScript TypeScript Java C"
          />
          <CardNote title="Databases" description="Mysql PostgreSQL" />
          <CardNote title="Tools" description="VSCode Windows Git Github" />
          <CardNote title="Other" description="HTML CSS SCSS NodeJS" />
          <CardNote title="Frameworks/ library" description="Angular React" />
        </div>
      </div>
    </div>
  );
}
