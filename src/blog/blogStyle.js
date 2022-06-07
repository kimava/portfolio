import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    const { paddings } = theme;
    return css`
      padding: ${paddings.xlarge} 0;
      height: 80vh;
    `;
  }}
`;

export const Post = styled.div`
  ${({ theme }) => {
    const { colors, fonts, margins, paddings } = theme;
    return css`
      margin: auto;
      margin-bottom: ${margins.large};
      position: relative;
      width: 90%;
      height: 5rem;
      border: 3px solid ${colors.black};
      transform-origin: right bottom;

      a {
        padding-left: ${paddings.base};
        display: block;
        line-height: 5rem;
        font-size: ${fonts.size.large};
      }

      &:before,
      &:after {
        display: block;
        position: absolute;
        content: '';
        border: 3px solid ${colors.black};
        background-color: ${colors.black};
      }

      &:before {
        bottom: -24px;
        left: 7px;
        width: 100%;
        height: 15px;
        transform: skewX(45deg);
        background-color: ${colors.black};
      }

      &:after {
        bottom: -13px;
        right: -23px;
        width: 15px;
        height: 100%;
        transform: skewY(45deg);
        background-color: ${colors.black};
      }

      &:hover {
        background-color: ${colors.purple};
      }

      &:nth-child(2) {
        &:hover {
          background-color: ${colors.orange};
        }
      }

      &:nth-child(3) {
        &:hover {
          background-color: ${colors.green};
        }
      }
    `;
  }}
`;
