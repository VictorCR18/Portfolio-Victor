import { AboutMe } from "../../components/AboutMe";
import { Contacts } from "../../components/Contacts";
import { Presentation } from "../../components/Presentation";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";

import "./styles.css";

export function Home() {
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
