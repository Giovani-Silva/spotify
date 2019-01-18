import { createGlobalStyle } from 'styled-components';
import 'rc-slider/assets/index.css';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
  }

  html, body, #app, #app > div:first-child {
    height: 100% !important;
  }

  body {
    background: ${colors.black};
    color: ${colors.white};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    line-height: 2rem;
  }

  .page__padding {
    padding: 20px;
  }
`;

export default GlobalStyle;
