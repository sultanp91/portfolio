import React from "react";
import ImageCarousel from "./carousel";

function Projects({ title, description, images }) {
  return (
    <div className="projects-section-item">
      <div className="projects-section-text">
        <h3 className="projects-section-text__heading">{title}</h3>
        <p className="projects-section-text__content">{description}</p>
      </div>
      <ImageCarousel
        className="projects-section-carousel"
        images={images}
        title={title}
      />
    </div>
  );
}

export default Projects;
