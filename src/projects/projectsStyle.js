import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      margin: auto;
      width: 90%;
      line-height: 1.5rem;
    `;
  }}
`;

export const Project = styled.div`
  ${({ theme }) => {
    const { colors, margins } = theme;
    return css`
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      position: relative;
      margin-bottom: ${margins.xlarge};
      width: 90%;
      height: 25rem;
      border: 3px solid ${colors.black};
      transform-origin: right bottom;

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

      &:nth-child(2) {
        margin-left: 10%;
        flex-direction: row-reverse;
      }
    `;
  }}
`;

export const ThumbBox = styled.div`
  ${({ theme }) => {
    const { colors, paddings } = theme;
    return css`
      display: flex;
      flex: 1;
      padding: ${paddings.medium};
      height: 100%;
      align-items: center;
      border: 1px solid ${colors.black};

      img {
        width: 100%;
      }
    `;
  }}
`;

export const ContentBox = styled.div`
  ${({ theme }) => {
    const { colors, fonts, margins, paddings } = theme;
    return css`
      padding: ${paddings.medium};
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 2;
      height: 100%;
      border: 1px solid ${colors.black};

      h3 {
        margin-bottom: ${margins.medium};
      }

      p {
        margin-bottom: ${margins.base};
      }

      div {
        margin-bottom: ${margins.base};
      }

      span {
        margin-right: ${margins.base};
        font-size: ${fonts.size.xsmall};
        color: ${colors.gray};
      }

      a {
        margin-bottom: ${margins.small};
        display: block;
        color: inherit;
        text-decoration: none;
      }
    `;
  }}
`;

export const Link = styled.div`
  ${({ theme }) => {
    const { colors, fonts, margins } = theme;
    return css`
      margin-bottom: 0;

      a {
        display: inline-block;
      }

      .github,
      .link {
        margin-right: ${margins.base};
        font-size: ${fonts.size.medium};
        color: ${colors.gray};
        transition: all 0.3s ease;

        &:hover {
          color: ${colors.black};
          cursor: pointer;
        }
      }
    `;
  }}
`;
