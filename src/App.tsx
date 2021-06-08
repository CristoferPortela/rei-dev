import React from "react";
import { Header } from "./components/Header";
import { HashRouter as Router } from 'react-router-dom';
import { GlobalStyle, StyledTheme } from "./StyledGlobal";
import './style.sass'
import { Slider } from "./components/Slider";
import { Pages } from './Pages';
import 'material-icons';
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={StyledTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Slider />
        <Pages />
      </Router>
    </ThemeProvider>
  );
}

export default App;
