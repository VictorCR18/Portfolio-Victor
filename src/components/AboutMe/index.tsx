import { Titles } from "../Titles";

import "./styles.css";

import Person from "../../assets/Person.png";
import Dots from "../../assets/Dots.svg";
import Dots2 from "../../assets/Dots2.svg";

export function AboutMe() {
  return (
    <div className="main-aboutme">
      <div className="title-aboutme">
        <Titles symbol="#" title="about-me" />
        <div className="bar-aboutme"></div>
      </div>
      <div className="content-aboutme">
        <div className="text-aboutme">
          <label>
            Hello, I'm Victor!
            <br />
            <br />
            Student with technical training in the area of Information
            Technology, currently a university student. I'm a front-end
            developer and aspiring full-stack. I can develop responsive websites
            and bring good experiences to users.
            <br />
            <br />
            Turning my creativity and knowledge into websites has been my
            passion for over a year now. I always strive to learn about the
            newest technologies and frameworks.
            <br />
            <br />
          </label>
          <a className="button-aboutme">Read more -&gt;</a>
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
