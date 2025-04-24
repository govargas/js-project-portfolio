import React from 'react';
import styled from 'styled-components';
import { Section }  from '../components/ui/SectionContainer';
import { Headline } from '../components/ui/Headline';

const Bg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.white};
  max-width: 800px;
`;

export default function HeaderSection() {
  return (
    <Section id="header" style={{ position: 'relative', padding: 0 }}>
      <Bg src="/talo_header.webp" alt="Portrait of Talo Vargas" />
      <Overlay>
        <p>Hi there, I’m</p>
        <Headline>Talo Vargas</Headline>
        <h3>Creative Frontend Developer with a Background in Journalism, Arts Education and Music Tech</h3>
        <p>
          I’m a frontend developer who brings together code, creativity, and communication. …
        </p>
      </Overlay>
    </Section>
  );
}