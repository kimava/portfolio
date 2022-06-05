import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    const { colors, margins, paddings } = theme;
    return css`
      margin-bottom: 5rem;
    `;
  }}
`;

export const Post = styled.div`
  ${({ theme }) => {
    const { colors, margins, paddings } = theme;
    return css`
      position: relative;
      margin: auto;
      margin-bottom: ${margins.large};
      width: 90%;
      height: 5rem;
      border: 3px solid black;
      transform-origin: right bottom;

      a {
          display: block;
          padding-left: 1rem;
          line-height: 5rem;
          font-size: 2rem;
      }
  
        &:before,
        &:after {
            border 3px solid black;
            content: '';
            display: block;
            position: absolute;
            background-color: black;
        }
  
        &:before {
            bottom: -24px;
            left: 7px;
            width: 100%;
            height: 15px;
            transform: skewX(45deg);
            background-color: black;
        }
  
        &:after {
            right: -23px;
            bottom: -13px;
            height: 100%;
            width: 15px;
            transform: skewY(45deg);
            background-color: black;
        }

      &:hover {
        background-color: ${colors.purple};
        }
        
      &:nth-child(2) {
        &:hover {
            background-color: ${colors.yellow};
        }
        }
    `;
  }}
`;
