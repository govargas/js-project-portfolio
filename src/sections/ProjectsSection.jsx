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
  grid-template-columns: 1fr; /* one card per row */
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm}; 
  overflow: hidden;

  ${media.lg} {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    align-items: flex-start;
    margin-bottom: ${({ theme }) => theme.space.xxl};
    gap: ${({ theme }) => theme.space.xl}; 
  }
`;

const ProjectPhoto = styled(BasePhoto)`
  width: 100%;
  display: block;

  ${media.lg} {
    width: 45%;
    flex-shrink: 0;
  }
`;

const Info = styled.div`
  width: 100%;
  flex: 1;
  /* ── mobile: no horizontal padding here, rely on Section’s 16px gutter ── */
  padding: ${({ theme }) => theme.space.md} 0;  

  ${media.md} {
    /* ── tablet: narrower block under photo ── */
    width: 80%;
    padding: ${({ theme }) => theme.space.md} 0;
    text-align: left;
  }

  ${media.lg} {
    /* ── desktop: side-by-side, with a 32px gutter inside info ── */
    width: 55%;
    padding: 0 ${({ theme }) => theme.space.lg};
  }
`;

const TagList = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  margin-top: ${({ theme }) => theme.space.md};
`;

export default function ProjectsSection() {
  return (
    <Section id="featured-projects">
      <Headline>Featured Projects</Headline>

      <Grid>
        {projects.map((p, i) => (
          <Card key={p.id} reverse={i % 2 === 1}>
            <ProjectPhoto src={p.image} alt={`${p.title} screenshot`} />

            <Info>
              <TagList>
                {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </TagList>

              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <ButtonGroup>
                <Button href={p.demoUrl} variant="solid">
                  <img src="/globe.svg" alt="Globe icon" />
                  <span>Live demo</span>
                </Button>
                <Button href={p.codeUrl} variant="solid">
                  <img className="github" src="/github.svg" alt="Github icon" />
                  <span>View Code</span>
                </Button>
              </ButtonGroup>
            </Info>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}