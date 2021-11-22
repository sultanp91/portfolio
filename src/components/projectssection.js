import React from "react";
import Projects from "./projects";
import { projectData } from "./projectdata";

function ProjectsSection() {
  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-section__heading heading-text-gradient">
        Projects
      </h2>
      {projectData.map((data) => (
        <Projects
          title={data.title}
          description={data.description}
          images={data.images}
          repo={data.repo}
          live={data.live}
          tech={data.tech}
        />
      ))}
    </div>
  );
}

export default ProjectsSection;
