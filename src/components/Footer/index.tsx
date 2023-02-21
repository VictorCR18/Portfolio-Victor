import Union from "../../assets/Union.svg";
import Discord from "../../assets/Discord.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Github from "../../assets/Github.svg";

import "./styles.css";

export function Footer() {
  return (
    <div className="main-footer">
      <div className="line-footer" />
      <div className="content-footer">
        <div className="infor-content-footer">
          <div className="logo-footer">
            <a href="/" className="link-logo">
              <img className="union" src={Union} /> Victor Dev
            </a>
            <label>cavalcantevictor2003@gmail.com</label>
          </div>
          <label className="label-logo">front-end developer and aspiring full-stack</label>
        </div>
        <div className="media-footer">
          <label className="label-media">Media</label>
          <div className="icons-media">
            <a href="https://github.com/VictorCR18">
              <img src={Github} />
            </a>
            <a href="https://www.linkedin.com/in/victor-cavalvante-421349198/">
              <img src={Linkedin} />
            </a>
            <a>
              <img src={Discord} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
