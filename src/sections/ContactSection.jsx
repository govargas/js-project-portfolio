import React from 'react';
import styled from 'styled-components';
import { Section }   from '../components/ui/SectionContainer';
import { Headline }  from '../components/ui/Headline';
import { FadeInSection } from '../components/ui/FadeInSection';
import { Photo as BasePhoto } from '../components/ui/Photo';

const ContactWrapper = styled(Section)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

// force the Headline to be white here
const WhiteHeadline = styled(Headline)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

const ProfileWrapper = styled.div`
  width: 164px;
  height: 164px;
  margin: 0 auto ${({ theme }) => theme.space.lg};
  border-radius: 50%;
  overflow: hidden;
`;

const Photo = styled(BasePhoto)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  line-height: 1.4;

  p {
    margin-bottom: ${({ theme }) => theme.space.sm};
  }
`;

// icon links: pass `invert` to invert only LinkedIn
  const IconLink = styled.a.withConfig({
    shouldForwardProp: prop => prop !== 'invert'
  })`
  display: inline-block;
  width: 32px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
    filter: ${({ invert }) => (invert ? 'invert(1)' : 'none')};
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.lg};
  margin-top: ${({ theme }) => theme.space.md};
`;

export default function ContactSection() {
  return (
    <ContactWrapper id="contact">
      <FadeInSection><WhiteHeadline>Let’s Talk</WhiteHeadline></FadeInSection>

      <FadeInSection><ProfileWrapper>
        <Photo src="/talo_profile.webp" alt="Talo Vargas" />
      </ProfileWrapper></FadeInSection>

      <FadeInSection><Info>
        <p>Talo Vargas</p>
        <p>+46 (0)725 79 46 77</p>
        <p>
          <a href="mailto:talovargasd@gmail.com">
            talovargasd@gmail.com
          </a>
        </p>
      </Info></FadeInSection>

      <FadeInSection><Icons>
        {/* invert only the LinkedIn SVG */}
        <IconLink href="https://www.linkedin.com/in/talovargas/" invert aria-label="LinkedIn profile">
          <img src="/linkedin.svg" alt="" />
        </IconLink>

        {/* GitHub SVG stays as-is */}
        <IconLink href="https://github.com/govargas/" aria-label="GitHub">
          <img src="/github.svg" alt="" />
        </IconLink>
      </Icons></FadeInSection>
    </ContactWrapper>
  );
}