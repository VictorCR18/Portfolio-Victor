import { Titles } from "../../Geral/Titles";
import "./styles.css";

import Person from "../../../assets/Person.png";
import Dots from "../../../assets/Dots.svg";
import Dots2 from "../../../assets/Dots2.svg";
import { AboutMeProps } from "../../../types";
import { Link } from "react-router-dom";

export function AboutMe({ symbol, display }: AboutMeProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="main-aboutme">
      <div className="title-aboutme">
        <div className="title-header">
          <Titles symbol={symbol} title="about-me" />
          <div className="bar-aboutme" style={{ display: display }} />
        </div>

        <p
          className="subtitle"
          style={{ display: display === "inline" ? "none" : "block" }}
        >
          Who am I?
        </p>
      </div>

      <div className="content-aboutme">
        <div className="text-aboutme">
          <p>Hello, I'm Victor!</p>

          <p>
            I’m a Fullstack Developer based in Ceará, Brazil. I can develop
            responsive websites and scalable APIs from scratch and raise them
            into modern user-friendly web experiences.
          </p>

          <p>
            Transforming my creativity and knowledge into software has been my
            passion for over {currentYear - 2024} years. I have been helping various projects
            and companies to establish their presence online using the modern
            JavaScript ecosystem. I always strive to learn about the newest
            technologies and frameworks.
          </p>

          <Link
            to="/about"
            className="button-aboutme"
            style={{ display: display }}
          >
            Read more -&gt;
          </Link>
        </div>

        <div className="picture-aboutme">
          <img className="person" src={Person} alt="Me" />
          <img className="dots-aboutme" src={Dots} alt="" />
          <img className="dots2-aboutme" src={Dots2} alt="" />
        </div>
      </div>
    </div>
  );
}
