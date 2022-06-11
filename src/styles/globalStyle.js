import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};

${({ theme }) => {
  const { colors, fonts } = theme;

  return css`
    * {
      box-sizing: border-box;
    }

    body {
      margin: auto;
      max-width: 80rem;
      font-family: ${fonts.family};
      font-size: ${fonts.size.small};
      color: ${colors.black},
      background-color: ${colors.white};

      button,
      a {
        &:hover {
          cursor: pointer;
        }
      }
    }
  `;
}}


`;

export default GlobalStyle;
