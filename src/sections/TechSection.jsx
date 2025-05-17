import React from 'react';
import styled from 'styled-components';
import { Section } from '../components/ui/SectionContainer';
import { Headline } from '../components/ui/Headline';
import { FadeInSection } from '../components/ui/FadeInSection';
import { media }   from '../styles/media';

const TechWrapper = styled(Section)`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};   /* pure black */
  color: ${({ theme }) => theme.colors.background};     /* white text */
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

// force headline white
const CenteredHeadline = styled(Headline)`
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

// one line of comma-separated skills
const List = styled.p`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
`;

export default function TechSection() {
  const skills = [
    'HTML','CSS','Flexbox','JavaScript','ES6','JSX',
    'React','React Hooks','Node.js','Mongo DB',
    'Accessibility','APIs','Mob-programming',
    'Pair-programming','GitHub'
  ];

  return (
    <TechWrapper id="tech">
      <Content>
        <FadeInSection><CenteredHeadline>Tech</CenteredHeadline></FadeInSection>
        <FadeInSection><List>{skills.join(', ')}</List></FadeInSection>
      </Content>
    </TechWrapper>
  );
}