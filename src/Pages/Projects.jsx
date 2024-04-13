import React from "react";
import { StyledPageComponent } from "../Components/StyledPageComponent";
import { AboutTitle } from "../Components/AboutTitle";
import ProjectCard from "../Components/Card/ProjectCard";

const Projects = () => {
  return (
    <StyledPageComponent>
      <AboutTitle>MAIN PROJECT</AboutTitle>
      <ProjectCard />
    </StyledPageComponent>
  );
};

export default Projects;
