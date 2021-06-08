import React from "react";
import { Header } from "./components/Header";
import { HashRouter as Router } from 'react-router-dom';
import { GlobalStyle } from "./StyledGlobal";
import './style.sass'
import { Slider } from "./components/Slider";
import { Pages } from './Pages';
import 'material-icons';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Slider />
        <Pages />
      </Router>
    </>
  );
}

export default App;
