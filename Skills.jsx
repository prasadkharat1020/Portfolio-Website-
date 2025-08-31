import React from 'react';

const skills = [
  'JavaScript (ES6+)',
  'React.js',
  'HTML5 & CSS3',
  'Node.js',
  'Git & GitHub',
  'Responsive Design',
];

const Skills = () => {
  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: '2rem 0' }}>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
