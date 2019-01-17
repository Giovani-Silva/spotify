import { createGlobalStyle } from 'styled-components';
import 'rc-slider/assets/index.css';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #app {
    height: 100%;
  }
  body {
    background: ${colors.dark};
    color: ${colors.white};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
    line-height: 2rem;
  }
`;

export default GlobalStyle;
