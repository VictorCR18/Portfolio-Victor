import "./styles.css";

import { CardProps } from "../../../types";
import { t } from "i18next";

export function Card({ image, tools, nameProj, description, link }: CardProps) {
  const techList = tools
    .split(/\s+/)
    .map((tech) => tech.trim())
    .filter(Boolean);

  return (
    <article className="main-card">
      <div className="image-card">
        <img
          className="image"
          src={image}
          alt={nameProj}
          loading="lazy"
        />

        <div className="card-tech-overlay">
          <div className="card-tech-tags">
            {techList.map((tech) => (
              <span key={tech} className="card-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3>{nameProj}</h3>
        <p>{t(description)}</p>

        <div className="button-card">
          <a
            className="link-card"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver o projeto ${nameProj} ao vivo`}
          >
            Live {"<~>"}
          </a>
        </div>
      </div>
    </article>
  );
}
