import React from 'react';
import resumePDF from '../assets/resume.pdf'; // make sure this file exists

const Resume = () => {
  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: '2rem 0' }}>
      <h2>Resume</h2>
      <p>Download my resume to learn more about my professional experience.</p>
      <a href={resumePDF} download="YourName_Resume.pdf" style={{ color: 'blue', textDecoration: 'underline' }}>
        Download Resume (PDF)
      </a>
    </div>
  );
};

export default Resume;
