import React from 'react';
import styled from 'styled-components';
import { Section }  from '../components/ui/SectionContainer';
import { Headline } from '../components/ui/Headline';

const skills = [
  'HTML', 'CSS', 'Flexbox', 'JavaScript', 'ES6', 'JSX',
  'React', 'React Hooks', 'Node.js', 'Mongo DB',
  'Web Accessibility', 'APIs', 'Mob-programming',
  'Pair-programming', 'GitHub'
];

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.md};
`;

const Item = styled.li`
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

export default function TechSection() {
  return (
    <Section id="tech">
      <Headline>Tech</Headline>
      <List>
        {skills.map(skill => <Item key={skill}>{skill}</Item>)}
      </List>
    </Section>
  );
}