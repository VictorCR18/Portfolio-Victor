import { useContext } from "react"
import { Link } from "react-router-dom";
import MyContext from "../../../utils/translateContext";

import { Titles } from "../../Geral/Titles";
import "./styles.css";

import Person from "../../../assets/Person.png";
import Dots from "../../../assets/Dots.svg";
import Dots2 from "../../../assets/Dots2.svg";
import { AboutMeProps } from "../../../types";

export function AboutMe({ symbol, display }: AboutMeProps) {
  const { t }: any = useContext(MyContext);
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2024;

  return (
    <div className="main-aboutme">
      <div className="title-aboutme">
        <div className="title-header">
          <Titles symbol={symbol} title={t("aboutMe.title")} />
          <div className="bar-aboutme" style={{ display: display }} />
        </div>

        <p
          className="subtitle"
          style={{ display: display === "inline" ? "none" : "block" }}
        >
          {t("aboutMe.subtitle")}
        </p>
      </div>

      <div className="content-aboutme">
        <div className="text-aboutme">
          <p>{t("aboutMe.p1")}</p>

          <p>{t("aboutMe.p2")}</p>

          <p>
            {t("aboutMe.p3_part1")} {yearsOfExperience} {t("aboutMe.p3_part2")}
          </p>

          <Link
            to="/about"
            className="button-aboutme"
            style={{ display: display }}
          >
            {t("aboutMe.button")}-&gt;
          </Link>
        </div>

        <div className="picture-aboutme">
          <img className="person" src={Person} alt="Me" />
          <img className="dots-aboutme" src={Dots} alt="" />
          <img className="dots2-aboutme" src={Dots2} alt="" />
        </div>
      </div>
    </div>
  );
}