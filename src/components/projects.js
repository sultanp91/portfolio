import React from "react";
import ImageCarousel from "./carousel";

function Projects({ title, description, images }) {
  return (
    <div className="projects-section__item">
      <h3>{title}</h3>
      <p>{description}</p>
      <ImageCarousel images={images} title={title} />
    </div>
  );
}

export default Projects;
