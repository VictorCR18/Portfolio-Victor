import { MyFunFacts } from "../../components/AboutMe/MyFunFacts";
import { Skills } from "../../components/Home/Skills";
import { AboutMe } from "../../components/Home/AboutMe";
import "./styles.css";

export default function AboutMePage() {
  return (
    <div className="about-me-main">
      <AboutMe symbol="/" display="none"/>
      <Skills symbol="#" display="none" />
      {/* <MyFunFacts /> */}
    </div>
  );
}
