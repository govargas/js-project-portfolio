// src/App.jsx
import React from 'react';
import Header       from './components/Header';
import Tech         from './components/Tech';
import Articles     from './components/Articles';
import Skills       from './components/Skills';
import Projects     from './components/Projects';
import Contact      from './components/Contact';

export default function App() {
  return (
    <>
      <Header />
      <Tech />
      <Articles />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}