// src/sections/ProjectsSection.jsx
import React from 'react';
import styled from 'styled-components';
import { Section }  from '../components/ui/SectionContainer';
import { Headline } from '../components/ui/Headline';
import { Button }   from '../components/ui/Button';
import { Tag }      from '../components/ui/Tag';
import { Photo as BasePhoto } from '../components/ui/Photo';
import { media }    from '../styles/media';
import projects     from '../data/projects.json';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xl};

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  overflow: hidden;

  ${media.md} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ProjectPhoto = styled(BasePhoto)`
  width: 100%;

  ${media.md} {
    width: 45%;
    flex-shrink: 0;
  }
`;

const Info = styled.div`
  padding: ${({ theme }) => theme.space.md};
  flex: 1;

  ${media.md} {
    width: 55%;
    padding-left: ${({ theme }) => theme.space.lg};
  }
`;

export default function ProjectsSection() {
  return (
    <Section id="featured-projects">
      <Headline>Featured Projects</Headline>
      <Grid>
        {projects.map((p) => (
          <Card key={p.id}>
            <ProjectPhoto src={p.image} alt={`${p.title} screenshot`} />
            <Info>
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <Button href={p.demoUrl}>
                <img src="/globe.svg" alt="" />
                Live demo
              </Button>
              <Button variant="outline" href={p.codeUrl}>
                <img src="/github.svg" alt="" />
                View Code
              </Button>
            </Info>
          </Card>
        ))}
      </Grid>
      <Button variant="outline" href="#all-projects">
        <img src="/arrow.svg" alt="" />
        See more projects
      </Button>
    </Section>
  );
}