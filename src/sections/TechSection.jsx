// src/sections/TechSection.jsx
import React from 'react';
import styled from 'styled-components';
import { Headline } from '../components/ui/Headline';
import { media }   from '../styles/media';

// 1) Full-bleed black wrapper
const TechWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};   /* pure black */
  color: ${({ theme }) => theme.colors.background};     /* white text */
  padding: ${({ theme }) => `${theme.space.xl} ${theme.space.md}`};

  ${media.sm} {
    padding: ${({ theme }) => `${theme.space.lg} ${theme.space.sm}`};
  }
`;

// 2) Centered container for pills & headline
const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

// // 3) White, centered headline
// const CenteredHeadline = styled(Headline)`
//   color: ${({ theme }) => theme.colors.background}; /* white */
//   margin-bottom: ${({ theme }) => theme.space.lg};
// `;

// 4) Pills list
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.md};
  justify-content: center;
`;

// 5) Each pill
const Item = styled.li`
  background: ${({ theme }) => theme.colors.primary};  /* black */
  color: ${({ theme }) => theme.colors.background};   /* white */
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  font-size: ${({ theme }) => theme.fontSizes.body};

  &:hover {
    opacity: 0.8;
  }
`;

export default function TechSection() {
  return (
    <TechWrapper id="tech">
      <Content>
        <Headline inverse>Tech</Headline>
        <List>
          {[
            'HTML','CSS','Flexbox','JavaScript','ES6','JSX',
            'React','React Hooks','Node.js','Mongo DB',
            'Accessibility','APIs','Mob-programming',
            'Pair-programming','GitHub'
          ].map(skill => (
            <Item key={skill}>{skill}</Item>
          ))}
        </List>
      </Content>
    </TechWrapper>
  );
}