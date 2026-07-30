import "./styles.css";

import { useContext } from "react";
import MyContext from "../../../utils/translateContext";

import Dots from "../../../assets/Dots.svg";
import Rectangle from "../../../assets/Rectangle.svg";
import Logo from "../../../assets/Logo.svg";

import { Titles } from "../../Geral/Titles";
import { CardNote } from "../../Geral/CardNote";
import { SkillsProps } from "../../../types";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

export function Skills({ symbol, display }: SkillsProps) {
  const { t }: any = useContext(MyContext);
  const showDecoration = display === "inline";
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`main-skills reveal ${isVisible ? "reveal-visible" : ""}`}
    >
      <div className="titles-skills">
        <Titles symbol={symbol} title={t("skills.title")} />
        <div
          className="bar-skills"
          style={{ display: showDecoration ? "block" : "none" }}
        />
      </div>

      <div className="content-skills">
        {showDecoration && (
          <div className="box-pictures">
            <img className="Dots1" src={Dots} alt="" loading="lazy" />
            <img className="Dots2" src={Dots} alt="" loading="lazy" />
            <img className="Rectangle1" src={Rectangle} alt="" loading="lazy" />
            <img className="Rectangle2" src={Rectangle} alt="" loading="lazy" />
            <img className="Logo2" src={Logo} alt="" loading="lazy" />
          </div>
        )}

        <div
          className="skills-tools"
          style={{
            justifyContent: display === "inline" ? "flex-end" : "flex-start",
          }}
        >
          <CardNote
            title={t("skills.languages")}
            description={t("skills.languagesDesc")}
          />
          <CardNote
            title={t("skills.databases")}
            description={t("skills.databasesDesc")}
          />
          <CardNote
            title={t("skills.tools")}
            description={t("skills.toolsDesc")}
          />
          <CardNote
            title={t("skills.other")}
            description={t("skills.otherDesc")}
          />
          <CardNote
            title={t("skills.frameworks")}
            description={t("skills.frameworksDesc")}
          />
        </div>
      </div>
    </div>
  );
}
