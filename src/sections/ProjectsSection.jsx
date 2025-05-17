// src/sections/ProjectsSection.jsx
import React from 'react';
import styled, { css } from 'styled-components';
import { Section }  from '../components/ui/SectionContainer';
import { Headline } from '../components/ui/Headline';
import { FadeInSection } from '../components/ui/FadeInSection';
import { Button }   from '../components/ui/Button';
import { Tag }      from '../components/ui/Tag';
import { Photo as BasePhoto } from '../components/ui/Photo';
import { media }    from '../styles/media';
import projects     from '../data/projects.json';

// ── GRID: 64px gap by default, 128px on desktop ──
const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xxl}; /* 64px */

  ${media.lg} {
    gap: 128px;                           /* 128px between cards */
    grid-template-columns: 1fr;           /* keep one column */
  }
`;

// ── CARD: 64px gap between image & info on small, 125px on desktop ──
const Card = styled.article.withConfig({
  shouldForwardProp: prop => prop !== 'reverse'
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xxl}; /* 64px */

  ${media.lg} {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    align-items: flex-start;
    gap: 125px;                            /* 125px between image & info */
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
  padding: ${({ theme }) => theme.space.md} 0;

  ${media.md} {
    width: 80%;
    text-align: left;
  }

  ${media.lg} {
    width: 55%;
    padding: 0 ${({ theme }) => theme.space.lg};
  }
`;

// ── split tags into rows, stretch only when exactly 3 in a row ──
const TagRow = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'equal'
})`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  ${({ equal }) =>
    equal &&
    css`
      > * { flex: 1; }
    `}
  /* vertical spacing between rows */
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space.sm};
  }
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
      <FadeInSection>
        <Headline>Featured Projects</Headline>
      </FadeInSection>

      <Grid>
        {projects.map((p, i) => {
          // split tags into rows of max 3
          const rows = [];
          for (let j = 0; j < p.tags.length; j += 3) {
            rows.push(p.tags.slice(j, j + 3));
          }

          return (
            <Card key={p.id} reverse={i % 2 === 1}>
              <ProjectPhoto src={p.image} alt={`${p.title} screenshot`} />

              <Info>
                {rows.map((row, idx) => (
                  <TagRow key={idx} equal={row.length === 3}>
                    {row.map(t => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </TagRow>
                ))}

                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <ButtonGroup>
                  <Button href={p.demoUrl} variant="solid">
                    <img src="/globe.svg" alt="" />
                    <span>Live demo</span>
                  </Button>
                  <Button href={p.codeUrl} variant="solid">
                    <img src="/github.svg" alt="" className="github" />
                    <span>View Code</span>
                  </Button>
                </ButtonGroup>
              </Info>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
}