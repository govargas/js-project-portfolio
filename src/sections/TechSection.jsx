import React from "react";
import styled from "styled-components";
import { Section } from "../components/ui/SectionContainer";
import { Headline } from "../components/ui/Headline";
import { FadeInSection } from "../components/ui/FadeInSection";
import { media } from "../styles/media";

const TechWrapper = styled(Section)`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary}; /* pure black */
  color: ${({ theme }) => theme.colors.background}; /* white text */
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CenteredHeadline = styled(Headline)`
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

const List = styled.p`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
`;

export default function TechSection() {
  const skills = [
    "TypeScript",
    "JavaScript (ES6+)",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Styled-components",
    "Mongo DB",
    "Web Audio API",
    "Storybook",
    "Accessibility (a11y)",
    "APIs",
    "Git & GitHub",
  ];

  return (
    <TechWrapper id="tech">
      <Content>
        <FadeInSection>
          <CenteredHeadline>Tech</CenteredHeadline>
        </FadeInSection>
        <FadeInSection>
          <List>{skills.join(", ")}</List>
        </FadeInSection>
      </Content>
    </TechWrapper>
  );
}
