import "./styles.css";

import { useContext } from "react";
import MyContext from "../../../utils/translateContext";

import { Titles } from "../../Geral/Titles";
import Discord from "../../../assets/Discord.svg";
import Instagram from "../../../assets/Instagram.svg";
import Email from "../../../assets/Email.svg";
import LinkedIn from "../../../assets/Linkedin.svg";
import Whatsapp from "../../../assets/Whatsapp.svg";
import { ContactProps } from "../../../types";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

export function Contacts({ symbol, display }: ContactProps) {
  const { t }: any = useContext(MyContext);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`main-contacts reveal ${isVisible ? "reveal-visible" : ""}`}
    >
      <div className="title-contacts">
        <Titles symbol={symbol} title={t("contacts.title")} />
        <div className="bar-contacts" style={{ display: display }} />
      </div>

      <div className="content-contacts">
        <div className="text-contacts">
          <p>
            {t("contacts.desc")}
          </p>
        </div>

        <div className="box-contacts">
          <div className="box">
            <span className="box-title">{t("contacts.messageMe")}</span>
            <div className="box-rede">
              <div className="box-label">
                <img src={Discord} alt="Discord" loading="lazy" />
                <span>VictorCR77#7738</span>
              </div>
              <div className="box-label">
                <img className="linkedin" src={LinkedIn} alt="LinkedIn" loading="lazy" />
                <span>Victor Cavalcante</span>
              </div>
              <div className="box-label">
                <img className="whatsapp" src={Whatsapp} alt="Whatsapp" loading="lazy" />
                <span>+5585999458074</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="outher-media"
        style={{ display: display === "inline" ? "none" : "flex" }}
      >
        <Titles symbol="#" title={t("contacts.otherMedia")} />
        <div className="list-outher-media">
          <div className="box-label">
            <img className="email" src={Email} alt="Email" loading="lazy" />
            <span>cavalcantevictor2003@gmail.com</span>
          </div>
          <div className="box-label">
            <img className="instagram" src={Instagram} alt="Instagram" loading="lazy" />
            <span>_veto0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
