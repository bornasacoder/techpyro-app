import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProviderWrapper from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProviderWrapper>
    <CssBaseline/>
    <App />
  </ThemeProviderWrapper>
);

