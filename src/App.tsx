import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useStoredTheme } from './hooks/useStoredTheme';

import Navbar from './components/Navbar/Navbar';
import Home from './routes/Home';
import Projects from './routes/Projects';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(p) => p.theme.background};
    color: ${(p) => p.theme.text};
  }
  * {
    box-sizing: border-box;
  }
  h1 {
    text-align: center;
    font-family: "Fira Mono", monospace;
    font-weight: 500;
    font-size: 48px;
  }
  p {
    font-family: "Fira Sans", sans-serif;
    font-weight: 300;
    font-size: 20px;
    margin-left: 20vw;
    margin-right: 20vw;
  }
  a {
    color: ${(p) => p.theme.accent};
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const App: React.FC = () => {

  const { theme } = useStoredTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
        <GlobalStyle />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;