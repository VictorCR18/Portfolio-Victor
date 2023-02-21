import "./styles.css";

import Image from "../../assets/Image.png";
import Logo from "../../assets/Logo.svg";
import Dots from "../../assets/Dots.svg";
import Aspas from "../../assets/Aspas.svg";

import MyContext from "../Context/translateContext";
import { useContext } from "react";

export function Presentation() {

  const { t }: any = useContext(MyContext);


  return (
    <div className="main-presentation">
      <div className="content">
        <div className="text-box">
          <h2>
          {t("pre.h2pt1")}<span>{t("pre.spanpt1")}</span> {t("pre.h2pt2")}{" "}
            <span>{t("pre.spanpt2")}</span>
          </h2>
          <label>
            He crafts responsive websites where technologies meet creativity
          </label>
          <button>Contact me !!</button>
        </div>
        <div className="ilustration">
          <img className="Logo" src={Logo} />
          <img className="Image" src={Image} />
          <img className="Dots" src={Dots} />
          <label className="status">
            <span className="rectangle"></span>Majoring in Information Systems
          </label>
        </div>
      </div>
      <div className="box-quote">
        <img className="Aspas1" src={Aspas} />
        <div className="quote">
          <p>
            {t("pre.preQuote")}
          </p>
        </div>
        <img className="Aspas2" src={Aspas} />
        <div className="author">
          <p>- Monkey D. Luffy</p>
        </div>
      </div>
    </div>
  );
}
