import "./styles.css";
import { Titles } from "../../Geral/Titles";
import { educationData } from "../../../compose";

export function MyEducation() {
  return (
    <div className="my-education">
      <div className="title-education">
        <Titles symbol="#" title="my-education" />
      </div>

      <div className="education-list">
        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="timeline-connector">
              <div className={`dot ${item.status}`}></div>
              {index !== educationData.length - 1 && (
                <div className="line-education"></div>
              )}
            </div>

            <div className="card-content">
              <div className="card-header">
                <h3 className="role-title">{item.role}</h3>
                <span className="date-badge">{item.date}</span>
              </div>

              <h4 className="institution">{item.institution}</h4>

              <p className="description">{item.description}</p>

              <div className="tech-tags">
                {item.techs.map((tech, i) => (
                  <span key={i} className="tag">
                    # {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
