// src/styles/GlobalStyle.jsx
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* 1. Resets & box-sizing */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* SKIP LINK: visually hidden until focused */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.space.sm};
    z-index: 100;
    transition: top 0.3s ease;
  }
  .skip-link:focus {
    top: 0;
  }

  /* 2. Base typography & colors */
  html {
    scroll-behavior: smooth;
  }

  html, body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    overflow-x: hidden;
  }

  /* 3. Ensure all elements inherit the font */
  * {
    font-family: inherit;
  }

  /* 4. Images are responsive */
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* 5. Remove default link styling everywhere */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* 6. Custom focus outlines for accessibility */
  :focus {
    outline: 3px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  /* 7. Reset buttons & form elements */
  button,
  input,
  textarea {
    font-family: inherit;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  /* 8. Generic inline-icon sizing for img inside links or buttons */
  a img,
  button img {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    display: inline-block;
  }
`;
