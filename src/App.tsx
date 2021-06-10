import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from 'react-router-dom';
import { GlobalStyle, StyledTheme } from "./StyledGlobal";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Pages } from './Pages';
import 'material-icons';
import './style.sass';

function App() {
  return (
    <>
      <ThemeProvider theme={StyledTheme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Slider />
          <Pages />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
