import React from 'react';
import HeaderSection   from './sections/HeaderSection';
import TechSection     from './sections/TechSection';
import ArticlesSection from './sections/ArticlesSection';
import SkillsSection   from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection  from './sections/ContactSection';

export default function App() {
  return (
    <>
      <HeaderSection />
      <TechSection />
      <ProjectsSection />
      <SkillsSection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}