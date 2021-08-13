import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
	  width: 100%;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
    overflow-x: hidden;
    min-width: 1400px;

  }

  * {
	  box-sizing: border-box;
  }
  
  
  body {
      font-family: 'Noto Sans KR', sans-serif;   
  }

  .full-width {
	  width: 100%;
  }
`;

export default GlobalStyle;
