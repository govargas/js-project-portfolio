import React from 'react';
import styled from 'styled-components';
import { Section }  from '../components/ui/SectionContainer';
import { Headline } from '../components/ui/Headline';
import { media }    from '../styles/media';

const columns = {
  Code:      ['HTML5','CSS3','JavaScript ES6','Styled Components','GitHub'],
  Toolbox:  ['Atom','Postman','After Effects','Photoshop','Premiere','Illustrator','Figma','Resolve','Keynote','Slack','Ableton','Logic','Bitwig'],
  Upcoming: ['MongoDB','Node.js','React','Supabase'],
  More:     ['Branding','Strategy','Process','Concept','Agile'],
  Languages:['Spanish','Swedish','English','German']
};

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.lg};
  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${media.lg} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Col = styled.div``;
const List = styled.ul`
  list-style: none;
  margin-top: ${({ theme }) => theme.space.sm};
`;
const Item = styled.li`
  margin-bottom: ${({ theme }) => theme.space.xs};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

export default function SkillsSection() {
  return (
    <Section id="skills">
      <Headline>Skills</Headline>
      <Grid>
        {Object.entries(columns).map(([heading, items]) => (
          <Col key={heading}>
            <h4>{heading}</h4>
            <List>
              {items.map(i => <Item key={i}>{i}</Item>)}
            </List>
          </Col>
        ))}
      </Grid>
    </Section>
  );
}