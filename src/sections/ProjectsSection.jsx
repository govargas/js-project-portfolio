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

// 8px vertical gap between the two buttons
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  margin-top: ${({ theme }) => theme.space.md};
`;

// Center the "See more projects" button
const FooterAction = styled.div`
  margin-top: ${({ theme }) => theme.space.xl};
  text-align: center;
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