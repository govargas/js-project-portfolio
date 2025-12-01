// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import HeaderSection from './sections/HeaderSection';
import TechSection   from './sections/TechSection';
import ArticlesSection from './sections/ArticlesSection';
import SkillsSection   from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection  from './sections/ContactSection';

export default function App() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <HeaderSection />
      <TechSection />
      <ProjectsSection />
      <SkillsSection />
      <ArticlesSection />
      <ContactSection />
      </main>
    </>
  );
}