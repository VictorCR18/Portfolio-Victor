import { Header } from "../../components/Header";
import { Presentation } from "../../components/Presentation";
import { Projects } from "../../components/Projects";

import "./styles.css";

export function Home() {
  return (
    <div className="content">
      <div className="main-home">
        <Header />
        <Presentation />
        <Projects />
      </div>
    </div>
  );
}
