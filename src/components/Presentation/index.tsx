import "./styles.css";

import Image from "../../assets/Image.png";

export function Presentation() {
  return (
    <div className="main-presentation">
      <div className="content">
        <div className="text-box">
          <h2>
            Victor is a <span>front-end developer</span> and{" "}
            <span>aspiring fullstack</span>
          </h2>
        </div>
        <div className="ilustration">
          <img src={Image} />
        </div>
      </div>
    </div>
  );
}
