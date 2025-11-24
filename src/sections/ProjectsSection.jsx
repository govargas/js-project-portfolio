import React from "react";
import styled, { css } from "styled-components";
import { Section } from "../components/ui/SectionContainer";
import { Headline } from "../components/ui/Headline";
import { FadeInSection } from "../components/ui/FadeInSection";
import { Button } from "../components/ui/Button";
import { Tag } from "../components/ui/Tag";
import { Photo as BasePhoto } from "../components/ui/Photo";
import { media } from "../styles/media";
import projects from "../data/projects.json";

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xxl}; /* 64px */

  ${media.lg} {
    gap: 128px; /* 128px between cards */
  }
`;

const Card = styled.article.withConfig({
  shouldForwardProp: (prop) => prop !== "reverse",
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl}; /* 32px */

  ${media.lg} {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: flex-start;
    gap: 125px; /* desktop image ↔ info */
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

  ${media.md} {
    width: 80%;
    text-align: left;
  }

  ${media.lg} {
    width: 55%;
    padding: 0 ${({ theme }) => theme.space.lg};
  }

  h3 {
    margin-top: ${({ theme }) => theme.space.md}; /* ensure 16px above title */
  }
`;

const TagRow = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "equal",
})`
  display: flex;
  gap: ${({ theme }) => theme.space.sm}; /* 8px horizontally */
  ${({ equal }) =>
    equal &&
    css`
      > * {
        flex: 1;
      }
    `}

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space.sm};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm}; /* 8px */
  margin-top: ${({ theme }) => theme.space.xl}; /* 32px */

  /* mobile-only: make fixed-width buttons shrink and center */
  @media (max-width: 767px) {
    & > a {
      width: 100%;
      max-width: 260px; /* account for container padding */
      margin: 0;
    }
  }
`;

export default function ProjectsSection() {
  return (
    <Section id="featured-projects">
      <FadeInSection>
        <Headline>Featured Projects</Headline>
      </FadeInSection>

      <Grid>
        {projects.map((p, i) => {
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
                    {row.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </TagRow>
                ))}

                <h3>{p.title}</h3>
                <p>{p.description}</p>

                {(p.demoUrl || p.codeUrl) && (
                  <ButtonGroup>
                    {p.demoUrl && (
                      <Button href={p.demoUrl} variant="solid">
                        <img src="/globe.svg" alt="" />
                        <span>Live demo</span>
                      </Button>
                    )}
                    {p.codeUrl && (
                      <Button href={p.codeUrl} variant="solid">
                        <img src="/github.svg" alt="" className="github" />
                        <span>View Code</span>
                      </Button>
                    )}
                  </ButtonGroup>
                )}
              </Info>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
}
