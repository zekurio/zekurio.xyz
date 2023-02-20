import React from 'react';
import styled from 'styled-components';

const ProjectCardDiv = styled.div`
  position: relative;
  max-width: 400px;
  min-width: 400px;
  height: 200px;
  background-color: ${(p) => p.theme.backgroundDarkest};
  border-radius: 10px;
  margin: 10px;
  padding: 5px 5px 5px 5px;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  h3 {
    margin: 10px 10px 10px 10px;
    font-size: 30px;
    font-weight: 400;
    font-family: "Fira Mono", monospace;
    color: ${(p) => p.theme.text};
  }

  p {
    margin: 10px 10px 10px 10px;
    font-size: 20px;
    font-weight: 300;
    font-family: "Fira Sans", sans-serif;
    color: ${(p) => p.theme.text};
  }
`;

type Project = {
  title: string;
  description: string;
  url: string;
};

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <ProjectCardDiv>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </ProjectCardDiv>
  );
}

export default ProjectCard;