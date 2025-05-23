import React from 'react';
import styled from 'styled-components';
import { Section }   from '../components/ui/SectionContainer';
import { Headline }  from '../components/ui/Headline';
import { FadeInSection } from '../components/ui/FadeInSection'
import { Tag }       from '../components/ui/Tag';
import { media }     from '../styles/media';

const SkillsWrapper = styled(Section)`
  background: ${({ theme }) => theme.colors.primary};   /* black */
  color: ${({ theme }) => theme.colors.white};         /* white text */
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
  margin: 0 auto;                             /* center on mobile/tablet */
  background: ${({ theme }) => theme.colors.primary}; /* white */
  color: ${({ theme }) => theme.colors.background}; /* black */
  border-color: ${({ theme }) => theme.colors.background}; 
  font-weight: 600;

  ${media.lg} {
    margin: 0;      /* reset to left-align on desktop */
  }
`;

const Item = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.4;
`;

export default function SkillsSection() {
  return (
    <SkillsWrapper id="skills">
      <FadeInSection><WhiteHeadline>Skills</WhiteHeadline></FadeInSection>

      <Grid>
      <FadeInSection>
        <Column>
          <ColumnTag>Code</ColumnTag>
          <Item>HTML5</Item>
          <Item>CSS3</Item>
          <Item>JavaScript ES6</Item>
          <Item>React.js</Item>
          <Item>Styled Components</Item>
          <Item>Tailwind</Item>
          <Item>GitHub</Item>
        </Column>
      </FadeInSection>

      <FadeInSection>
        <Column>
          <ColumnTag>Toolbox</ColumnTag>
          <Item>Atom</Item>
          <Item>Postman</Item>
          <Item>Adobe After Effects</Item>
          <Item>Adobe Photoshop</Item>
          <Item>Adobe Premiere</Item>
          <Item>Adobe Illustrator</Item>
          <Item>Figma</Item>
          <Item>DaVinci Resolve</Item>
          <Item>Keynote</Item>
          <Item>Slack</Item>
          <Item>Ableton Live</Item>
          <Item>Logic Pro X</Item>
          <Item>Bitwig</Item>
        </Column>
      </FadeInSection>

      <FadeInSection>
        <Column>
          <ColumnTag>Upcoming</ColumnTag>
          <Item>MongoDB</Item>
          <Item>Node.js</Item>
          <Item>Supabase</Item>
        </Column>
      </FadeInSection>

      <FadeInSection>
        <Column>
          <ColumnTag>More</ColumnTag>
          <Item>Branding</Item>
          <Item>Strategy</Item>
          <Item>Process Design</Item>
          <Item>Concept Development</Item>
          <Item>Agile methodology</Item>
        </Column>
      </FadeInSection>  

      <FadeInSection>
        <Column>
          <ColumnTag>Languages</ColumnTag>
          <Item>Spanish</Item>
          <Item>Swedish</Item>
          <Item>English</Item>
          <Item>German</Item>
        </Column>
      </FadeInSection>    
      </Grid>
    </SkillsWrapper>
  );
}