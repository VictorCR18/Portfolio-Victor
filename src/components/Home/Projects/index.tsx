import "./styles.css";

import { useContext } from "react";
import MyContext from "../../../utils/translateContext";

import { Card } from "../../Geral/Card";
import { Titles } from "../../Geral/Titles";
import { Link } from "react-router-dom";
import { ProjectsProps } from "../../../types";
import { CompleteApps } from "../../../compose";

export function Projects({ symbol, display }: ProjectsProps) {
  const { t }: any = useContext(MyContext);

  return (
    <div className="main-projects">
      <div className="title-projects">
        <div className="content-title-projects">
          <div className="title-projects-label">
            <Titles symbol={symbol} title={t("projects.title")} />
            <div className="bar-projects" style={{ display: display }} />
          </div>

          <Link
            to="/works"
            className="link-projects"
            style={{ display: display }}
          >
            {t("projects.viewAll")}~~&gt;
          </Link>
        </div>

        <span style={{ display: display === "inline" ? "none" : "block" }}>
          {display !== "inline" && (
            <>
              <p>{t("projects.listDesc")}</p>
              <Titles symbol="#" title={t("projects.completeApps")} />
            </>
          )}
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
