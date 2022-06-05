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
    return css`
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 0.9rem;
      text-transform: uppercase;
      }
    `;
  }}
`;
