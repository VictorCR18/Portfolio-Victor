import IronFit from "../../../assets/IronFit.png";
import Carrinho from "../../../assets/Carrinho.png";
import "./styles.css";

import { Card } from "../../Geral/Card";
import { Titles } from "../../Geral/Titles";
import { Link } from "react-router-dom";
import { ProjectsProps } from "../../../types";
import { CompleteApps } from "../../../compose";

export function Projects({ symbol, display }: ProjectsProps) {
  return (
    <div className="main-projects">
      <div className="title-projects">
        <div className="content-title-projects">
          <label className="title-projects-label">
            <Titles symbol={symbol} title="projects" />
            <div className="bar-projects" style={{ display: display }} />
          </label>
          <Link
            to="/works"
            className="link-projects"
            style={{ display: display }}
          >
            View all ~~&gt;
          </Link>
        </div>
        <span style={{ display: display === "inline" ? "none" : "inline" }}>
          <p>List of my projects</p>
          <Titles symbol="#" title="complete apps" />
        </span>
      </div>
      <div className="Cards">
        {(display === "inline" ? CompleteApps.slice(0, 3) : CompleteApps).map(
          (project, index) => (
            <Card key={index} {...project} />
          ),
        )}
      </div>
    </div>
  );
}
