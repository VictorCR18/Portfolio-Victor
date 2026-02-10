import Union from "../../../assets/Union.svg";
import Discord from "../../../assets/Discord.svg";
import Linkedin from "../../../assets/Linkedin.svg";
import Github from "../../../assets/Github.svg";

import "./styles.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="main-footer">
      <div className="container-footer">
        <div className="infor-content-footer">
          <div className="logo-footer">
            <a href="/" className="link-logo">
              <img className="union" src={Union} /> Victor Dev
            </a>
            <label>cavalcantevictor2003@gmail.com</label>
          </div>
          <label className="label-logo">
            Fullstack developer
          </label>
        </div>
        <div className="media-footer">
          <label className="label-media">Media</label>
          <div className="icons-media">
            <a href="https://github.com/VictorCR18">
              <img src={Github} />
            </a>
            <a href="https://www.linkedin.com/in/victor-cavalcante-421349198/">
              <img src={Linkedin} />
            </a>
            <a>
              <img src={Discord} />
            </a>
          </div>
        </div>
      </div>
      <div className="copy-footer">
        Copyright © {currentYear} Victor Dev. All rights reserved.{" "}
      </div>
    </div>
  );
}
