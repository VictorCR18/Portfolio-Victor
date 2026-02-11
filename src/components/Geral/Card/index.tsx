import "./styles.css";

import { CardProps } from "../../../types";

export function Card({ image, tools, nameProj, description, link }: CardProps) {
  return (
    <article className="main-card">
      <div className="image-card">
        <img className="image" src={image} alt={nameProj} />
      </div>

      <div className="tools-card">
        <span>{tools}</span>
      </div>

      <div className="content-card">
        <h3>{nameProj}</h3>
        <p>{description}</p>

        <div className="button-card">
          <a
            className="link-card"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live {"<~>"}
          </a>
        </div>
      </div>
    </article>
  );
}
