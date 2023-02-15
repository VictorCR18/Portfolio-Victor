import { AboutMe } from "../../components/AboutMe";
import { Header } from "../../components/Header";
import { Presentation } from "../../components/Presentation";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";

import "./styles.css";

export function Home() {
  return (
    <div className="content">
      <div className="main-home">
        <Header />
        <Presentation />
        <Projects />
        <Skills />
        <AboutMe />
      </div>
    </div>
  );
}
