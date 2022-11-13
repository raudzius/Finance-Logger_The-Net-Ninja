import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { CssBaseline } from '@mui/material';
import { MainProvider } from 'contexts/MainContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>,
);
