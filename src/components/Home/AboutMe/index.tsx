import { Titles } from "../../Geral/Titles";

import "./styles.css";

import Person from "../../../assets/Person.png";
import Dots from "../../../assets/Dots.svg";
import Dots2 from "../../../assets/Dots2.svg";
import { AboutMeProps } from "../../../types";
import { Link } from "react-router-dom";

export function AboutMe({ symbol, display }: AboutMeProps) {
  return (
    <div className="main-aboutme">
      <div className="title-aboutme">
        <div>
          <Titles symbol={symbol} title="about-me" />
          <div className="bar-aboutme" style={{ display: display }} />
        </div>
        <p style={{ display: display === "inline" ? "none" : "inline" }}>
          Who am I?
        </p>
      </div>
      <div className="content-aboutme">
        <div className="text-aboutme">
          <label>
            Hello, I'm Victor!
            <br />
            <br />
            I’m a Fullstack Developer based in Ceará, Brazil. I can develop
            responsive websites and scalable APIs from scratch and raise them
            into modern user-friendly web experiences.
            <br />
            <br />
            Transforming my creativity and knowledge into software has been my
            passion for over two years. I have been helping various projects and
            companies to establish their presence online using the modern
            JavaScript ecosystem. I always strive to learn about the newest
            technologies and frameworks.
            <br />
            <br />
          </label>
          <Link
            to="/about"
            className="button-aboutme"
            style={{ display: display }}
          >
            Read more -&gt;
          </Link>
        </div>
        <div className="picture-aboutme">
          <img className="person" src={Person} />
          <img className="dots-aboutme" src={Dots} />
          <img className="dots2-aboutme" src={Dots2} />
        </div>
      </div>
    </div>
  );
}
