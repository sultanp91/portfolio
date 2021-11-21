import React from "react";
import ImageCarousel from "./carousel";

function Projects({ title, description, images, repo, live }) {
  return (
    <div className="projects-section-item">
      <div className="projects-section-text">
        <h3 className="projects-section-text__heading">{title}</h3>
        <p className="projects-section-text__content">{description}</p>
        <a target="_blank" rel="noreferrer" href={repo}>
          <button
            type="button"
            className="projects-section-text__button projects-section-text__button-1"
          >
            Repo
          </button>
        </a>
        <a target="_blank" rel="noreferrer" href={live}>
          <button
            className="projects-section-text__button projects-section-text__button-2"
            type="button"
          >
            Live
          </button>
        </a>
      </div>
      <ImageCarousel
        className="projects-section-carousel"
        images={images}
        title={title}
        repo
      />
    </div>
  );
}

export default Projects;
