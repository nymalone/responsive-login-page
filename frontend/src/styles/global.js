import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --shape: #FFFFFF;
  --green-light: #AAA713;
  --green-lighter: #D6EEE8;
  --green-dark: #032D23;
  --gree-shape: #02546A;
  --danger: #C33332;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 html {
   @media(max-width: 1080px) {
     font-size: 93.75%;
   }
   @media(max-width: 720px) {
    font-size: 87.5%;
   }
 }

  body {
    background: var(--shape);
    -webkit-font-smoothing: antialiased;
    color: var(--green-dark)
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
