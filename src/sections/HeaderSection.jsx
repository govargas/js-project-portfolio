// src/sections/HeaderSection.jsx
import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/media';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;              /* fill most of the viewport */
  position: relative;
  overflow: hidden;
`;

const Bg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;         /* crop & cover */
  object-position: center right; /* focus on your face */
  transform: scale(1.1);     /* slight zoom */
`;

const Overlay = styled.div`
  position: absolute;
  top: 45%;
  right: 5%;
  transform: translateY(-50%);
  max-width: 600px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  /* Intro text “Hi there, I’m” */
  p.intro {
    font-size: 1.625rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.space.sm};
  }

  /* Main headline */
  h1 {
    font-size: 4.5rem;              /* ~72px */
    margin: ${({ theme }) => theme.space.xs} 0;
  }

  /* Sub-headline */
  h2 {
    font-size: 1.875rem;                /* ~30px */
    font-weight: 600 italic;
    margin-bottom: ${({ theme }) => theme.space.md};
  }

  /* Body paragraph */
  p.body {
    font-size: 1.625rem;            /* ~26px */
    line-height: 1.6;
  }

  /* Desktop tweaks */
  ${media.md} {
    right: ${({ theme }) => theme.space.lg};
    max-width: 500px;
  }
`;

export default function HeaderSection() {
  return (
    <HeaderWrapper>
      <Bg src="/talo_header.webp" alt="Portrait of Talo Vargas" />
      <Overlay>
        <p className="intro">Hi there, I’m</p>
        <h1>Talo Vargas</h1>
        <h2>
          Creative Frontend Developer with a Background in Journalism, Arts Education and Music Tech
        </h2>
        <p className="body">
          I’m a frontend developer who brings together code, creativity, and communication. With a background in public libraries, journalism, and music, I’m used to turning complex ideas into clear, engaging experiences for diverse audiences. Whether collaborating in a team or building solo, I code with people in mind — always aiming for thoughtful, accessible, and user-friendly solutions.
        </p>
      </Overlay>
    </HeaderWrapper>
  );
}