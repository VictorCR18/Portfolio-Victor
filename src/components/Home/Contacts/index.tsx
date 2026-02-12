import { Titles } from "../../Geral/Titles";

import "./styles.css";

import Discord from "../../../assets/Discord.svg";
import Instagram from "../../../assets/Instagram.svg";
import Email from "../../../assets/Email.svg";
import LinkedIn from "../../../assets/Linkedin.svg";
import Whatsapp from "../../../assets/Whatsapp.svg";
import { ContactProps } from "../../../types";

export function Contacts({ symbol, display }: ContactProps) {
  return (
    <div className="main-contacts">
      <div className="title-contacts">
        <Titles symbol={symbol} title="contacts" />
        <div className="bar-contacts" style={{ display: display }} />
      </div>
      <div className="content-contacts">
        <div className="text-contacts">
          <label>
            I’m interested in full-time opportunities and freelance projects.
            However, if you have any other request or question, don't hesitate
            to contact me.
          </label>
        </div>
        <div className="box-contacts">
          <div className="box">
            <label className="box-title">Suport me here</label>
            <div className="box-suport">
              <img className="whatsapp" src={Whatsapp} />
              <label className="box-label">+5585999458074</label>
            </div>
          </div>
          <div className="box">
            <label className="box-title">Message me here</label>
            <div className="box-rede">
              <label className="box-label">
                <img src={Discord} />
                VictorCR77#7738
              </label>
              <label className="box-label">
                <img className="linkedin" src={LinkedIn} />
                Victor Cavalcante
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        className="outher-media"
        style={{ display: display === "inline" ? "none" : "block" }}
      >
        <Titles symbol="#" title="other media" />
        <div className="list-outher-media">
          <label className="box-label">
            <img className="email" src={Email} />
            cavalcantevictor2003@gmail.com
          </label>{" "}
          <label className="box-label">
            <img className="instagram" src={Instagram} />
            _veto0
          </label>{" "}
        </div>
      </div>
    </div>
  );
}
