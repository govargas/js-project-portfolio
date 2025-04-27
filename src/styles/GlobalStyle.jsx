import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* 1. Resets & box-sizing */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 2. Base typography & colors */
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

  /* 6. Remove focus outlines (add your own focus styles later) */
  a:focus,
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
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