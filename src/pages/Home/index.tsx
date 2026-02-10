import { AboutMe } from "../../components/Home/AboutMe";
import { Contacts } from "../../components/Home/Contacts";
import { Presentation } from "../../components/Home/Presentation";
import { Projects } from "../../components/Home/Projects";
import { Skills } from "../../components/Home/Skills";

import "./styles.css";

export default function Home() {
  return (
      <div className="main-home">
        <Presentation />
        <Projects />
        <Skills />
        <AboutMe />
        <Contacts />
      </div>
  );
}
