import { Titles } from "../../Geral/Titles";

import "./styles.css";

export function CompleteApps() {
  return (
    <div className="main-complete-apps">
      <div className="title-complete-apps">
        <Titles symbol="/" title="projects" />
        <p>List of my projects</p>
      </div>
      <div className="content-complete-apps"></div>
    </div>
  );
}
