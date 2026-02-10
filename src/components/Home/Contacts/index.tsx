import { Titles } from "../../Geral/Titles";

import "./styles.css";

import Discord from "../../../assets/Discord.svg";
import Instagram from "../../../assets/Instagram.svg";

export function Contacts() {
  return (
    <div className="main-contacts">
      <div className="title-contacts">
        <Titles symbol="#" title="contacts" />
        <div className="bar-contacts" />
      </div>
      <div className="content-contacts">
        <div className="text-contacts">
          <label>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to contact me
          </label>
        </div>
        <div className="box-contacts">
          <div className="box">
            <label className="box-title">Message me here</label>
            <div className="box-rede">
              <label className="box-label">
                <img src={Discord} />
                VictorCR77#7738
              </label>
              <label className="box-label">
                <img className="instagram" src={Instagram} />
                victor_cr19
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
