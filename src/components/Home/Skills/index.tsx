import "./styles.css";

import Dots from "../../../assets/Dots.svg";
import Rectangle from "../../../assets/Rectangle.svg";
import Logo from "../../../assets/Logo.svg";

import { Titles } from "../../Geral/Titles";
import { CardNote } from "../../Geral/CardNote";
import { SkillsProps } from "../../../types";

export function Skills({ symbol, display }: SkillsProps) {
  const showDecoration = display === "inline";

  return (
    <div className="main-skills">
      <div className="titles-skills">
        <Titles symbol={symbol} title="skills" />
        <div className="bar-skills" style={{ display: showDecoration ? "block" : "none" }} />
      </div>

      <div className="content-skills">
        {showDecoration && (
          <div className="box-pictures">
            <img className="Dots1" src={Dots} alt="" />
            <img className="Dots2" src={Dots} alt="" />
            <img className="Rectangle1" src={Rectangle} alt="" />
            <img className="Rectangle2" src={Rectangle} alt="" />
            <img className="Logo2" src={Logo} alt="" />
          </div>
        )}

        <div
          className="skills-tools"
          style={{
            justifyContent: display === "inline" ? "flex-end" : "flex-start",
          }}
        >
          <CardNote
            title="Languages"
            description="JavaScript TypeScript Java"
          />
          <CardNote title="Databases" description="Mysql PostgreSQL FireBase" />
          <CardNote
            title="Tools"
            description="VSCode Hoppscotch Docker Git Github GitLab"
          />
          <CardNote title="Other" description="HTML CSS SCSS Axios NodeJS" />
          <CardNote
            title="Frameworks"
            description="Angular React Vue Spring Express.js"
          />
        </div>
      </div>
    </div>
  );
}
