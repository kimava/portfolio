import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};

${({ theme }) => {
  return css`
    html {
      width: 100vh;
    }

    body {
      font-family: ${theme.fonts.family};
      font-size: ${theme.fonts.size.regular};
    }
  `;
}}


`;

export default GlobalStyle;
