import { Skills } from "../../components/Home/Skills";
import { AboutMe } from "../../components/Home/AboutMe";
import { MyEducation } from "../../components/AboutMe/MyEducation";
import ScrollButton from "../../components/Geral/ScrollButton";

import "./styles.css";

export default function AboutMePage() {
  return (
    <div className="about-me-main">
      <AboutMe symbol="/" display="none"/>
      <ScrollButton />
      <Skills symbol="#" display="none" />
      <MyEducation />
    </div>
  );
}
