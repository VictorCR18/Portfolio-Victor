import "./styles.css";

import Image from "../../assets/Image.png";
import Logo from "../../assets/logo.svg";
import Dots from "../../assets/Dots.svg";
import Aspas from "../../assets/Aspas.svg";

export function Presentation() {
  return (
    <div className="main-presentation">
      <div className="content">
        <div className="text-box">
          <h2>
            Victor is a <span>front-end developer</span> and{" "}
            <span>aspiring fullstack</span>
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
            When the world pushes you, you just have to get up and push back.
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
