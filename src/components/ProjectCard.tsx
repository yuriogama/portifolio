"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";
import Illustration from "./Illustrations";

export default function ProjectCard({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className={`project ${project.featured ? "is-featured" : ""}`}>
      <div className={`project-media ${project.art ? "is-art" : ""}`}>
        {project.art ? (
          <Illustration name={project.art} />
        ) : project.image && !failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={`Banner ${project.name}`} loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <div className="media-fallback" role="img" aria-label={`Banner ${project.name}`}>
            {project.name}
          </div>
        )}
        {project.featured && <span className="badge">Destaque</span>}
      </div>
      <div className="project-body">
        <p className="project-kicker">{project.kicker}</p>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        {project.highlight && <p className="project-highlight">{project.highlight}</p>}
        {project.links && (
          <ul className="store-links" aria-label="Lojas entregues">
            {project.links.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noopener noreferrer">
                  <strong>{l.label}</strong>
                </a>
              </li>
            ))}
          </ul>
        )}
        <ul className="tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
