import React from "react";
import styled from "styled-components";
import { Section } from "../components/ui/SectionContainer";
import { Headline } from "../components/ui/Headline";
import { FadeInSection } from "../components/ui/FadeInSection";
import { Tag } from "../components/ui/Tag";
import { media } from "../styles/media";

const SkillsWrapper = styled(Section)`
  background: ${({ theme }) => theme.colors.primary}; /* black */
  color: ${({ theme }) => theme.colors.white}; /* white text */
`;

const WhiteHeadline = styled(Headline)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space.xl};
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.lg};
  grid-template-columns: 1fr;

  ${media.md} {
    /* tablet still stacks, but center items */
    grid-template-columns: 1fr;
    justify-items: center;
  }

  ${media.lg} {
    /* desktop: five columns */
    grid-template-columns: repeat(5, minmax(0, 1fr));
    justify-items: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  text-align: center;

  ${media.lg} {
    text-align: left;
  }
`;

const ColumnTag = styled(Tag)`
  width: 100%;
  max-width: 180px;
  margin: 0 auto; /* center on mobile/tablet */
  background: ${({ theme }) => theme.colors.primary}; /* white */
  color: ${({ theme }) => theme.colors.background}; /* black */
  border-color: ${({ theme }) => theme.colors.background};
  font-weight: 600;

  ${media.lg} {
    margin: 0; /* reset to left-align on desktop */
  }
`;

const Item = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.4;
`;

export default function SkillsSection() {
  return (
    <SkillsWrapper id="skills">
      <FadeInSection>
        <WhiteHeadline>Skills</WhiteHeadline>
      </FadeInSection>

      <Grid>
        <FadeInSection>
          <Column>
            <ColumnTag>Frontend</ColumnTag>
            <Item>HTML5</Item>
            <Item>CSS3</Item>
            <Item>TypeScript / JavaScript</Item>
            <Item>React.js</Item>
            <Item>Next.js</Item>
            <Item>Vite</Item>
            <Item>Tailwind CSS</Item>
            <Item>Styled Components</Item>
            <Item>Storybook</Item>
          </Column>
        </FadeInSection>

        <FadeInSection>
          <Column>
            <ColumnTag>Backend</ColumnTag>
            <Item>Node.js</Item>
            <Item>Express.js</Item>
            <Item>MongoDB</Item>
          </Column>
        </FadeInSection>

        <FadeInSection>
          <Column>
            <ColumnTag>Deployment</ColumnTag>
            <Item>Netlify</Item>
            <Item>Vercel</Item>
            <Item>MongoDB Atlas</Item>
            <Item>Supabase</Item>
            <Item>Docker</Item>
          </Column>
        </FadeInSection>

        <FadeInSection>
          <Column>
            <ColumnTag>Design & Creative Tools</ColumnTag>
            <Item>Adobe Suite</Item>
            <Item>Figma</Item>
            <Item>DaVinci Resolve</Item>
            <Item>Canva</Item>
            <Item>Keynote</Item>
          </Column>
        </FadeInSection>

        <FadeInSection>
          <Column>
            <ColumnTag>Audio & Creative Coding</ColumnTag>
            <Item>Web Audio API</Item>
            <Item>Strudel.js</Item>
            <Item>Ableton Live</Item>
            <Item>Logic Pro X</Item>
            <Item>Bitwig</Item>
          </Column>
        </FadeInSection>

        <FadeInSection>
          <Column>
            <ColumnTag>Workflow Tools</ColumnTag>
            <Item>Git & GitHub</Item>
            <Item>Agile Methodology</Item>
            <Item>Kanban</Item>
            <Item>Jira</Item>
            <Item>Confluence</Item>
            <Item>Slack</Item>
          </Column>
        </FadeInSection>

        <FadeInSection>
          <Column>
            <ColumnTag>Upcoming</ColumnTag>
            <Item>Python</Item>
            <Item>JUCE</Item>
            <Item>C++</Item>
          </Column>
        </FadeInSection>

        <FadeInSection>
          <Column>
            <ColumnTag>Languages</ColumnTag>
            <Item>Swedish</Item>
            <Item>English</Item>
            <Item>Spanish</Item>
            <Item>German</Item>
          </Column>
        </FadeInSection>
      </Grid>
    </SkillsWrapper>
  );
}
