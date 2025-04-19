// src/components/Skills.jsx
import React from 'react';

const columns = {
  Code:        ['HTML5','CSS3','JavaScript ES6','Styled Components','GitHub'],
  Toolbox:    ['Atom','Postman','Adobe After Effects','Photoshop','Premiere','Illustrator','Figma','DaVinci Resolve','Keynote','Slack','Ableton Live','Logic Pro X','Bitwig'],
  Upcoming:   ['MongoDB','Node.js','React','Supabase'],
  More:       ['Branding','Strategy','Process Design','Concept Development','Agile methodology'],
  Languages:  ['Spanish','Swedish','English','German']
};

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(columns).map(([heading, items]) => (
          <div key={heading}>
            <h4>{heading}</h4>
            <ul>
              {items.map(i => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}