import React, { useEffect} from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import daemon from '../assets/project-icons/daemon.jpg';

const ProjectsHeader = styled.h1`
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 200;
  font-size: 48px;
  margin-top: 120px;
  margin-bottom: 50px;
`;

const ProjectsDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: row wrap;
`;

function Projects() {

  useEffect(() => {
    document.title = "zekurio.xyz | Projects";
  }, []);

  const projects = [
    {
        id: 1,
        title: 'デーモン',
        description: 'A lightweight and feature rich discord bot which provides a variety of commands and features that works in the background.',
        url: 'https://github.com/zekurio/daemon'
    },
  ];

  return (
    <div>
      <ProjectsHeader>PROJECTS</ProjectsHeader>
      <ProjectsDiv>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsDiv>
    </div>
  );
}

export default Projects;