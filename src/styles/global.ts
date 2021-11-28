import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/background-github.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --font-family: 'Poppins', sans-serif;
    --background-color: #F0F0F5
  }

  body {
    background: var(--background-color) url(./${githubBackground}) no-repeat 70% top;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: var(--font-family), sans-serif;
    font-size: 16px;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
