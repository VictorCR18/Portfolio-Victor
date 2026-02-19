import Union from "../../../assets/Union.svg";
import Discord from "../../../assets/Discord.svg";
import Linkedin from "../../../assets/Linkedin.svg";
import Github from "../../../assets/Github.svg";

import "./styles.css";

import { useContext } from "react";
import MyContext from "../../../utils/translateContext";

export function Footer() {
  const { t }: any = useContext(MyContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container-footer">
        <div className="infor-content-footer">
          <div className="logo-footer">
            <a href="/" className="link-logo">
              <img className="union" src={Union} alt="Logo" /> Victor Dev
            </a>
            <span className="email-footer">cavalcantevictor2003@gmail.com</span>
          </div>
          <p className="description-footer">{t("footer.description")}</p>
        </div>
        <div className="media-footer">
          <span className="label-media">{t("footer.media")}</span>
          <div className="icons-media">
            <a
              href="https://github.com/VictorCR18"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-cavalcante-421349198/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
            <a href="#" aria-label="Discord">
              <img src={Discord} alt="Discord" />
            </a>
          </div>
        </div>
      </div>

      <div className="copy-footer">
        Copyright © {currentYear} Victor Dev. {t("footer.copy")}.
      </div>
    </footer>
  );
}
