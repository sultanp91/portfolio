import React from "react";
import Projects from "./projects";
import { projectData } from "./projectdata";

function ProjectsSection() {
  return (
    <div className="projects-section">
      <h2 className="projects-section__heading">Projects</h2>
      {projectData.map((data) => (
        <Projects
          title={data.title}
          description={data.description}
          images={data.images}
        />
      ))}
    </div>
  );
}

export default ProjectsSection;
