// src/sections/HeaderSection.jsx
import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/media';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  /* Mobile: center cover */
  background: url('/talo_header.webp') no-repeat 50% 50% / cover;

  /* Tablet (≥768px): slight pan & zoom */
  ${media.md} {
    background: url('/talo_header.webp') no-repeat 85% 25% / cover;
  }

  /* Desktop (≥1024px): full pan & zoom */
  ${media.lg} {
    background: url('/talo_header.webp') no-repeat 100% 10% / 110% auto;
  }
`;

const Overlay = styled.div`
  /* Mobile: fully centered, narrow column */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 320px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  p.intro {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.space.xs};
  }
  h1 {
    font-size: 2.5rem;
    margin: ${({ theme }) => theme.space.xs} 0;
  }
  h2 {
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.space.sm};
  }
  p.body {
    font-size: 1rem;
    line-height: 1.6;
  }

  /* Tablet: wider column & moderate text sizes */
  ${media.md} {
    top: 45%;
    width: 80vw;
    max-width: 600px;
    transform: translate(-50%, -50%);
    p.intro { font-size: 1.25rem; }
    h1       { font-size: 3.5rem; }
    h2       { font-size: 1.5rem; }
    p.body   { font-size: 1.25rem; }
  }

  /* Desktop: right-aligned, full sizes */
  ${media.lg} {
    top: 30%;
    right: ${({ theme }) => theme.space.lg};
    left: auto;
    transform: translateY(-50%);
    width: 60vw;
    max-width: 800px;
    p.intro { font-size: 1.625rem; }
    h1       { font-size: 4.5rem; }
    h2       { font-size: 1.875rem; }
    p.body   { font-size: 1.625rem; }
  }
`;

export default function HeaderSection() {
  return (
    <HeaderWrapper>
      <Overlay>
        <p className="intro">Hi there, I’m</p>
        <h1>Talo Vargas</h1>
        <h2>
          Creative Frontend Developer with a Background in Journalism, Arts
          Education and Music Tech
        </h2>
        <p className="body">
          I’m a frontend developer who brings together code, creativity, and
          communication. With a background in public libraries, journalism, and
          music, I’m used to turning complex ideas into clear, engaging
          experiences for diverse audiences. Whether collaborating in a team or
          building solo, I code with people in mind — always aiming for
          thoughtful, accessible, and user-friendly solutions.
        </p>
      </Overlay>
    </HeaderWrapper>
  );
}