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
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  overflow: hidden;

  ${media.lg} {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    align-items: flex-start;
    margin-bottom: ${({ theme }) => theme.space.xxl};
  }
`;

const ProjectPhoto = styled(BasePhoto)`
  width: 100%;

  ${media.lg} {
    width: 45%;
    flex-shrink: 0;
  }
`;

const Info = styled.div`
  padding: ${({ theme }) => theme.space.md};
  flex: 1;

  /* tablet: photo above, info below at 80% width */
  ${media.md} {
    width: 80%;
    text-align: left;
  }

  /* desktop: side-by-side layout */
  ${media.lg} {
    width: 55%;
    padding-left: ${({ theme }) => theme.space.lg};
    padding-right: ${({ theme }) => theme.space.lg};
  }
`;

/* Full‐width tag row */
const TagList = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.space.sm};   /* 8px between pills */
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  margin-top: ${({ theme }) => theme.space.md};
`;

const FooterAction = styled.div`
  margin-top: ${({ theme }) => theme.space.xl};
  text-align: center;
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
              {/* wrap tags in our full‐width flex container */}
              <TagList>
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </TagList>

              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <ButtonGroup>
                <Button href={p.demoUrl} variant="solid">
                  <img src="/globe.svg" alt="" />
                  <span>Live demo</span>
                </Button>
                <Button href={p.codeUrl} variant="solid">
                  <img src="/github.svg" alt="" />
                  <span>View Code</span>
                </Button>
              </ButtonGroup>
            </Info>
          </Card>
        ))}
      </Grid>

      <FooterAction>
        <Button href="#all-projects" variant="outline">
          <img src="/arrow.svg" alt="" />
          <span>See more projects</span>
        </Button>
      </FooterAction>
    </Section>
  );
}