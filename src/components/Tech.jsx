// src/components/Tech.jsx
import React from 'react';

const skills = [
  'HTML', 'CSS', 'Flexbox', 'JavaScript', 'ES6', 'JSX',
  'React', 'React Hooks', 'Node.js', 'Mongo DB',
  'Web Accessibility', 'APIs', 'Mob‑programming',
  'Pair‑programming', 'GitHub'
];

export default function Tech() {
  return (
    <section id="tech">
      <h2>Tech</h2>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
}