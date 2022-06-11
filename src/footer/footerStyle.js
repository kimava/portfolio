import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: end;
      width: 100%;
      height: 15vh;
    `;
  }}
`;

export const Links = styled.div`
  ${({ theme }) => {
    const { device, fonts, paddings, margins } = theme;
    return css`
      padding: ${paddings.large};
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: ${fonts.size.xsmall};
      text-transform: uppercase;
      }

      button {
        width: 12rem;
        font: inherit;
        text-transform: uppercase;
        background-color: transparent;
        border: 0;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      ${device.mobile} {
        flex-direction: column;
        align-items: center;

        button {
          margin-bottom: ${margins.small};
        }

        a {
          margin-bottom: ${margins.small};
        }
      }
    `;
  }}
`;
