// src/components/Projects.jsx
import React from 'react';
import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="featured-projects">
      <h2>Featured Projects</h2>
      {projects.map(p => <ProjectCard key={p.id} {...p} />)}
      <button className="button-outline">See more projects</button>
    </section>
  );
}