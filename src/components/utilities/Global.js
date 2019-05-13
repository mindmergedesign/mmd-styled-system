import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

`;
export default Global;
