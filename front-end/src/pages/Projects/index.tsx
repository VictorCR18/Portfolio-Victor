import "./styles.css";
import { SmallProjects } from "../../components/Projects/SmallProjects";
import { Projects } from "../../components/Home/Projects";

export default function ProjectsPage() {
  return (
    <div className="main-page-projects">
      <Projects symbol="/" display="none"/>
      <SmallProjects />
    </div>
  );
}
