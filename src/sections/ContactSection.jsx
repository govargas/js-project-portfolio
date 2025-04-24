import React from 'react';
import styled from 'styled-components';
import { Section } from '../components/ui/SectionContainer';
import { Headline } from '../components/ui/Headline';
import { Button } from '../components/ui/Button';
import { Photo } from '../components/ui/Photo';

const Info = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.space.md};
  line-height: 1.4;
`;

const Icons = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.sm};
`;

export default function ContactSection() {
  return (
    <Section id="contact">
      <Headline>Let’s Talk</Headline>
      <Photo src="/talo_profile.jpg" alt="Talo Vargas" />
      <Info>
        <p>Talo Vargas</p>
        <p>+46 (0)725 79 46 77</p>
        <p><a href="mailto:talovargasd@gmail.com">talovargasd@gmail.com</a></p>
      </Info>
      <Icons>
        <Button href="https://linkedin.com/in/…">
          <img src="/linkedin.svg" alt="LinkedIn" />
          LinkedIn
        </Button>
        <Button href="https://github.com/…">
          <img src="/github.svg" alt="GitHub" />
          GitHub
        </Button>
      </Icons>
    </Section>
  );
}