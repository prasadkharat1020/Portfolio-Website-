import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A cool project that does amazing things.',
    url: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'Another project showcasing my skills.',
    url: 'https://github.com/yourusername/project-two',
  },
];

const Projects = () => {
  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: '2rem 0' }}>
      <h2>Projects</h2>
      <ul>
        {projects.map(({ title, description, url }) => (
          <li key={title} style={{ marginBottom: '1rem' }}>
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold' }}>{title}</a>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
