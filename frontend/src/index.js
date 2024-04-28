import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './routes/public_routes';

import { ThemeProvider } from '@emotion/react';

import theme from './utils/muitheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme} initial={false}>
    <React.StrictMode>
      
      <RouterProvider router={AppRouter}/>
      
    </React.StrictMode>
  </ThemeProvider>
);

