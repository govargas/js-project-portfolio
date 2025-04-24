import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.jsx';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme }       from './styles/theme';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <App/>
  </ThemeProvider>
);