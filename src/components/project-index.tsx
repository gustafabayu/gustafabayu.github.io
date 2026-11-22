"use client";

import { useState } from "react";
import type { Project } from "../data/projects";

type ProjectIndexProps = {
  projects: Project[];
};

export function ProjectIndex({ projects }: ProjectIndexProps) {
  const [activeProjectId, setActiveProjectId] = useState(
    projects[0]?.id ?? null
  );
  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? projects[0];

  return (
    <div className="project-manual">
      <ol className="project-register" aria-label="Project records">
        {projects.map((project) => {
          const isActive = project.id === activeProject?.id;

          return (
            <li key={project.id}>
              <button
                type="button"
                className="project-record"
                aria-pressed={isActive}
                aria-controls="project-inspection-sheet"
                onClick={() => setActiveProjectId(project.id)}
              >
                <span className="record-copy">
                  <span className="record-name">{project.name}</span>
                  <span className="record-category">{project.category}</span>
                </span>
                <span className="record-action">
                  Inspect
                  <svg aria-hidden="true" viewBox="0 0 20 20">
                    <path d="M4 10h11M10 4l6 6-6 6" />
                  </svg>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {activeProject ? (
        <article
          id="project-inspection-sheet"
          className="inspection-sheet"
          aria-live="polite"
          aria-labelledby="inspection-title"
        >
          <div className="inspection-heading">
            <h3 id="inspection-title">{activeProject.name}</h3>
            <span className="inspection-category">{activeProject.category}</span>
          </div>
          <p className="inspection-description">{activeProject.description}</p>

          <dl className="inspection-facts">
            <div>
              <dt>Role</dt>
              <dd>{activeProject.role}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>
                <ul className="technology-list" aria-label="Technology stack">
                  {activeProject.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          {activeProject.links.github && (
            <a
              className="source-link"
              href={activeProject.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open source repository
              <svg aria-hidden="true" viewBox="0 0 20 20">
                <path d="M4 10h11M10 4l6 6-6 6" />
              </svg>
            </a>
          )}
        </article>
      ) : (
        <p className="empty-projects">No project records are available.</p>
      )}
    </div>
  );
}
