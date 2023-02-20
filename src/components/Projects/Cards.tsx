import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

function Cards() {

  // TODO make this a simple api call to get the projects
  const projects = [
    {
      title: 'daemon',
      description: 'A lightweight and feature rich discord bot which provides a variety of commands and features.',
      url: 'https://github.com/zekurio/daemon'
    },
    {
      title: 'shorty',
      description: 'A simple, self-hostable URL shortener written in Go.',
      url: 'https://github.com/zekurio/shorty'
    },
    {
      title: 'zekurio.xyz',
      description: 'The source code for this website.',
      url: 'https://github.com/zekurio/zekurio.xyz'
    },
  ];

  return (
    <CardsContainer>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </CardsContainer>
  );

}

export default Cards;