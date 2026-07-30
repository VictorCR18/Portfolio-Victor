import "./styles.css";

import Perfil from "../../../assets/perfil2.webp";
import Logo from "../../../assets/Logo.svg";
import Dots from "../../../assets/Dots.svg";

import MyContext from "../../../utils/translateContext";
import { useContext } from "react";

import { ContactModal } from "../ContactModal";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { Typewriter } from "../../Geral/Typewriter";

export function Presentation() {
  const { t }: any = useContext(MyContext);
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const adjectives: string[] = t("pre.adjectives", { returnObjects: true });

  return (
    <section
      ref={ref}
      className={`main-presentation reveal ${isVisible ? "reveal-visible" : ""}`}
    >
      <div className="content-presentation">
        <div className="text-box">
          <h1>
            {t("pre.h2pt1")}
            <span>{t("pre.spanpt1")}</span> {t("pre.h2pt2")}{" "}
            <span>
              {t("pre.spanpt2")}{" "}
              <Typewriter words={adjectives} className="typed-adjective" />
            </span>
          </h1>
          <p className="subtitle">{t("pre.label")}</p>

          <div className="action-buttons">
            <ContactModal>
              <button className="button-pre">{t("pre.button")}!!</button>
            </ContactModal>

            <a href="/Curriculo.pdf" download="Curriculo_Victor.pdf">
              <button className="button-outline">
                Download Curriculum Vitae
              </button>
            </a>
          </div>
        </div>

        <div className="ilustration">
          <div className="image-container">
            <span className="profile-glow" aria-hidden="true"></span>
            <img className="Logo-deco" src={Logo} alt="" />
            <img
              className="Image-perfil"
              src={Perfil}
              alt={t("pre.imageAlt")}
            />
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
