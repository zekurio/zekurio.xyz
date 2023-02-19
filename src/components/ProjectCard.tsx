import React from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title + "-project-image"} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;