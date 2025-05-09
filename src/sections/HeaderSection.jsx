// src/sections/HeaderSection.jsx
import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/media'

const HeaderWrapper = styled.header`
  width: 100%;
  height: auto;                    /* mobile/tablet flow to content */
  position: relative;
  overflow: hidden;

  /* ── MOBILE & TABLET: white BG & stacked flex ── */
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.space.md} 0;

  /* ── DESKTOP (≥1024px): background image + full-viewport hero ── */
  ${media.lg} {
    background: url('/talo_header.webp') no-repeat 100% 10% / 113% auto;
    display: block;
    padding: 0;
    height: 100vh;                 /* full-height on desktop */
  }
`

const Photo = styled.img`
  width: 90%;
  max-width: 800px;
  border-radius: 12px;
  object-fit: cover;
  margin: ${({ theme }) => theme.space.md} 0;

  /* hide on desktop (we use bg-image there) */
  ${media.lg} {
    display: none;
  }
`

const Overlay = styled.div`
  /* ── MOBILE & TABLET: stacked block in flow ── */
  width: 90%;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  & .intro {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.space.sm};
  }

  & h1 {
    font-size: 3rem;
    margin: ${({ theme }) => theme.space.xs} 0;
    line-height: 1.1;
  }

  & .body {
    font-size: 1rem;
    line-height: 1.6;
    margin-top: ${({ theme }) => theme.space.xs};
  }

  /* ── DESKTOP: absolutely positioned overlay ── */
  ${media.lg} {
    position: absolute;
    top: 50%;
    right: ${({ theme }) => theme.space.lg};
    transform: translateY(-50%);
    width: 50vw;
    max-width: 800px;
    text-align: right;
    color: ${({ theme }) => theme.colors.white};

    /* lift intro & title up */
    & .intro,
    & h1 {
      position: relative;
      top: -220px; /* tweak vertically as needed */
    }

    & .intro {
      font-size: 1.625rem;
    }

    & h1 {
      font-size: 4.5rem;
    }

    & .body {
      font-size: 1.625rem;
      margin-top: ${({ theme }) => theme.space.md};
    }
  }
`

export default function HeaderSection() {
  return (
    <HeaderWrapper>
      {/* intro + name */}
      <Overlay>
        <p className="intro">Hi there, I’m</p>
        <h1>Talo Vargas</h1>
      </Overlay>

      {/* portrait photo on mobile/tablet */}
      <Photo src="/talo_header.webp" alt="Portrait of Talo Vargas" />

      {/* body copy */}
      <Overlay as="div">
        <p className="body">
          I’m a full stack developer who brings together code, creativity, and
          communication. With a background in public libraries, journalism, and
          music, I’m used to turning complex ideas into clear, engaging
          experiences for diverse audiences. Whether collaborating in a team or
          building solo, I code with people in mind — always aiming for
          thoughtful, accessible, and user-friendly solutions.
        </p>
      </Overlay>
    </HeaderWrapper>
  )
}