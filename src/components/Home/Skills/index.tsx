import "./styles.css";

import Dots from "../../../assets/Dots.svg";
import Rectangle from "../../../assets/Rectangle.svg";
import Logo from "../../../assets/Logo.svg";

import { Titles } from "../../Geral/Titles";
import { CardNote } from "../../Geral/CardNote";
import { SkillsProps } from "../../../types";

export function Skills({ symbol, display }: SkillsProps) {
  return (
    <div className="main-skills">
      <div className="titles-skills">
        <Titles symbol={symbol} title="skills" />
        <div className="bar-skills" style={{ display: display }} />
      </div>
      <div className="content-skills">
        <div className="box-pictures" style={{ display: display }}>
          <img className="Dots1" src={Dots} />
          <img className="Dots2" src={Dots} />
          <img className="Rectangle1" src={Rectangle} />
          <img className="Rectangle2" src={Rectangle} />
          <img className="Logo2" src={Logo} />
        </div>
        <div
          className="skills-tools"
          style={{
            flexWrap: display === "inline" ? "wrap" : "nowrap",
            width: display === "inline" ? "40vw" : "100%",
          }}
        >
          <CardNote title="Other" description="HTML CSS SCSS Axios NodeJS" />
          <CardNote
            title="Frameworks/ library"
            description="Angular React Vue Spring Express.js"
          />
          <CardNote title="Databases" description="Mysql PostgreSQL FireBase" />
          <CardNote
            title="Tools"
            description="VSCode Hoppscotch Docker Git Github GitLab"
          />
          <CardNote
            title="Languages"
            description="JavaScript TypeScript Java"
          />
        </div>
      </div>
    </div>
  );
}
