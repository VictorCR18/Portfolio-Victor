import "./styles.css";

import Perfil from "../../../assets/Perfil.png";
import Logo from "../../../assets/Logo.svg";
import Dots from "../../../assets/Dots.svg";

import MyContext from "../../../utils/translateContext";
import { useContext } from "react";

import { ContactModal } from "../ContactModal";

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

          <div className="action-buttons">
            <ContactModal>
              <button className="button-pre">{t("pre.button")}!!</button>
            </ContactModal>

            <a href="/curriculo.pdf" download="Curriculo_Victor.pdf">
              <button className="button-outline">
                Download Curriculum Vitae
              </button>
            </a>
          </div>
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
    </section>
  );
}
