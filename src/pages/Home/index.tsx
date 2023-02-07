import { Header } from "../../components/Header";
import { Presentation } from "../../components/Presentation";

import "./styles.css";

export function Home() {
  return (
    <div className="content">
      <div className="main-home">
        <Header />
        <Presentation />
      </div>
    </div>
  );
}
