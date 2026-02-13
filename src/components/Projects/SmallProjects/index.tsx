import "./styles.css";

import { Card } from "../../Geral/Card";
import { Titles } from "../../Geral/Titles";

import { SimpleApps } from "../../../compose";

export function SmallProjects() {
  return (
    <div className="title-small-projects">
      <Titles symbol="#" title="small projects" />
      <div className="list-small-projects">
        {SimpleApps.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
