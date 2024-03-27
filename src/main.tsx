import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { CartContextProvider } from './contexts/CartContext.tsx';
import { DataContextProvider } from './contexts/DataContext.tsx';
import { LikedContextProvider } from './contexts/LikedContext.tsx';
import { ModalContextProvider } from './contexts/ModalContext.tsx';
import './i18n.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <CartContextProvider>
          <LikedContextProvider>
            <ModalContextProvider>
              <App />
            </ModalContextProvider>
          </LikedContextProvider>
        </CartContextProvider>
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
