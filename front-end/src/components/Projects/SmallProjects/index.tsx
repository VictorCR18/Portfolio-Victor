import "./styles.css";

import { useContext } from "react";
import MyContext from "../../../utils/translateContext";

import { Card } from "../../Geral/Card";
import { Titles } from "../../Geral/Titles";

import { SimpleApps } from "../../../compose";

export function SmallProjects() {
  const { t }: any = useContext(MyContext);

  return (
    <div className="title-small-projects">
      <Titles symbol="#" title={t("projects.smallProjects.title")} />

      <div className="list-small-projects">
        {SimpleApps.map((project, index) => (
          <Card key={index} {...project} description={t(project.description)} />
        ))}
      </div>
    </div>
  );
}
