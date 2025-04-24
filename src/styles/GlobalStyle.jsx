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
  }

  /* 3. Ensure all elements inherit the font */
  * {
    font-family: inherit;
  }

  /* 4. Images */
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* 5. Icon sizing inside buttons */
  .button img {
    width: 1em;           /* matches the button’s font-size */
    height: 1em;
    margin-right: 0.5em;  /* space between icon and text */
    vertical-align: text-bottom;
  }
`;