import React from "react";
import Card from "../ProjectCard";
import ProjectList from "./ProjectList.json";
import { Wrapper } from "./style";

const Projects = () => {
  return (
    <Wrapper>
      {ProjectList.map((Project) => (
        <Card title={Project.name} description={Project.description} />
      ))}
    </Wrapper>
  );
};

export default Projects;
