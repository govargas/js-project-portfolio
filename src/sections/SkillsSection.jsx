import React from 'react';
import styled from 'styled-components';
import { Section }   from '../components/ui/SectionContainer';
import { Headline }  from '../components/ui/Headline';
import { Tag }       from '../components/ui/Tag';
import { media }     from '../styles/media';

const SkillsWrapper = styled(Section)`
  background: ${({ theme }) => theme.colors.primary};   /* black */
  color: ${({ theme }) => theme.colors.white};         
`;

// Grid: 1 column on phone, 5 columns on desktop
const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.lg};
  grid-template-columns: 1fr;

  /* tablet+ still single col but centered items */
  ${media.md} {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  /* desktop+ five equal columns */
  ${media.lg} {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    justify-items: start;
  }
`;

// Each column
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  text-align: ${({ theme }) => theme.breakpoints.lg ? 'left' : 'center'};
`;

// Override Tag so it’s white bg / black text / black border
const ColumnTag = styled(Tag)`
  display: inline-block;
  flex: none;                         /* don’t stretch */
  border-color: white;
  font-weight: 600;
`;

// Individual skill item
const Item = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.4;
`;

export default function SkillsSection() {
  return (
    <SkillsWrapper id="skills">
      <Headline>Skills</Headline>

      <Grid>
        {/* Code */}
        <Column>
          <ColumnTag>Code</ColumnTag>
          <Item>HTML5</Item>
          <Item>CSS3</Item>
          <Item>JavaScript ES6</Item>
          <Item>Styled Components</Item>
          <Item>GitHub</Item>
        </Column>

        {/* Toolbox */}
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

        {/* Upcoming */}
        <Column>
          <ColumnTag>Upcoming</ColumnTag>
          <Item>MongoDB</Item>
          <Item>Node.js</Item>
          <Item>React</Item>
          <Item>Supabase</Item>
        </Column>

        {/* More */}
        <Column>
          <ColumnTag>More</ColumnTag>
          <Item>Branding</Item>
          <Item>Strategy</Item>
          <Item>Process Design</Item>
          <Item>Concept Development</Item>
          <Item>Agile methodology</Item>
        </Column>

        {/* Languages */}
        <Column>
          <ColumnTag>Languages</ColumnTag>
          <Item>Spanish</Item>
          <Item>Swedish</Item>
          <Item>English</Item>
          <Item>German</Item>
        </Column>
      </Grid>
    </SkillsWrapper>
  );
}