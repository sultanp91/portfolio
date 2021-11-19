import React from "react";
import ImageCarousel from "./carousel";

function Projects({ title, description, images }) {
  return (
    <div className="projects-section__item">
      <div className="projects-section__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <ImageCarousel
        className="projects-section__carousel"
        images={images}
        title={title}
      />
    </div>
  );
}

export default Projects;
