import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Login } from "./pages/Login";
import { SignUpModal } from './pages/Login/SignUpModal';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    height: 100%;
    margin: 0;
    color: rgb(255, 255, 255);
  }
`;

export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="i/flow/signup" element={<SignUpModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
