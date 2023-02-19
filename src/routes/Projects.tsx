import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
        id: 1,
        title: 'daemon',
        description: 'デーモン - a daemon like discord bot that works in the background',
        image: 'https://0.0.0.0',
        url: 'https://github.com/zekurio/daemon'
    },
  ];

  return (
    <div>
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;