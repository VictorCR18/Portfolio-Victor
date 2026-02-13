import "./styles.css";

import Perfil from "../../../assets/Perfil.png";
import Logo from "../../../assets/Logo.svg";
import Dots from "../../../assets/Dots.svg";
import Aspas from "../../../assets/Aspas.svg";

import MyContext from "../../../utils/translateContext";
import { useContext } from "react";

export function Presentation() {
  const { t }: any = useContext(MyContext);

  return (
    <section className="main-presentation">
      <div className="content-presentation">
        <div className="text-box">
          <h2>
            {t("pre.h2pt1")}
            <span>{t("pre.spanpt1")}</span> {t("pre.h2pt2")}{" "}
            <span>{t("pre.spanpt2")}</span>
          </h2>
          <p className="subtitle">{t("pre.label")}</p>
          <button className="button-pre">Contact me !!</button>
        </div>

        <div className="ilustration">
          <div className="image-container">
            <img className="Logo-deco" src={Logo} alt="" />
            <img className="Image-perfil" src={Perfil} alt="Perfil" />
            <img className="Dots-deco" src={Dots} alt="" />
          </div>

          <div className="status">
            <span className="rectangle"></span>
            {t("pre.lstatus")}
          </div>
        </div>
      </div>

      {/* <div className="box-quote">
        <div className="quote-container">
          <img className="Aspas-top" src={Aspas} alt="Aspas" />
          <div className="quote-content">
            <p>{t("pre.preQuote")}</p>
          </div>
          <div className="author-content">
            <p>- Monkey D. Luffy</p>
          </div>
          <img className="Aspas-bottom" src={Aspas} alt="Aspas" />
        </div>
      </div> */}
    </section>
  );
}
