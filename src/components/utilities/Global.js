import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body{
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  p > *:last-child {
    margin-bottom: 0;
  }

`;
export default Global;
