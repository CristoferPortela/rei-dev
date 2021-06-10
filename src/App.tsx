import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from 'react-router-dom';
import { GlobalStyle, StyledTheme } from "./StyledGlobal";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Pages } from './Pages';
import img2 from './assets/img/pexels-vlada-karpovich-6114985.jpg';
import 'material-icons';
import './style.sass';

function App() {
  return (
    <>
      <ThemeProvider theme={StyledTheme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Slider images={[{
            title: "Lorem ipsum dolor sit amet.",
            imageUrl: img2,
            text: `<p>Consectetur adipiscing elit. Mauris varius leo fringilla turpis ultricies, et viverra erat luctus. Ut elementum molestie nisl, id varius ipsum posuere commodo.</p>
            <p>Donec tortor velit, laoreet vel vulputate ac, scelerisque et sem. Sed at maximus lectus. Mauris porttitor turpis in mauris tincidunt accumsan. </p>`,
            author: "Foto de Vlada Karpovich no Pexels",
          }]} />
          <Pages />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
