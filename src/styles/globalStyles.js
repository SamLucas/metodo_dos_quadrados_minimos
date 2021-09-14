// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'Glory', sans-serif;
  }

  h1 {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
    margin: 0px;
  }

  p {
    margin: 0px;
    margin-bottom: 20px;
    font-family: 'Glory', sans-serif;
    font-weight: 400;
  }

  button {
    outline: 0;
  }
`;

export default GlobalStyle;