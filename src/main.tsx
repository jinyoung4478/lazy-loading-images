import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
