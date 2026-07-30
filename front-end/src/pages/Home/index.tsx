import { t } from "i18next";
import { AboutMe } from "../../components/Home/AboutMe";
import { Contacts } from "../../components/Home/Contacts";
import { Presentation } from "../../components/Home/Presentation";
import { Projects } from "../../components/Home/Projects";
import { Skills } from "../../components/Home/Skills";

import "./styles.css";
import ScrollButton from "../../components/Geral/ScrollButton";

export default function Home() {
 
  return (
    <div className="main-home">
      <Presentation />
      <ScrollButton />
      <Projects symbol="#" display="inline" />
      <Skills symbol="#" display="inline" />
      <AboutMe symbol="#" display="inline" />
      <Contacts symbol="#" display="inline" />
    </div>
  );
}