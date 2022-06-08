import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  ${({ theme }) => {
    const { colors, fonts, paddings } = theme;
    return css`
      padding: ${paddings.base};
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      text-transform: uppercase;
      font-size: ${fonts.size.medium};
      font-weight: ${fonts.weight.light};
      background-color: ${colors.white};
      z-index: 10;
    `;
  }}
`;

export const MenuBar = styled.ul`
  ${({ theme }) => {
    const { colors, margins, paddings } = theme;
    return css`
      padding-right: ${paddings.large};
      display: flex;
      justify-content: flex-end;

      a {
        display: inline-block;
        width: 10rem;
        height: 100%;
        line-height: 2.5rem;
        text-align: center;
      }

      li {
        margin-right: ${margins.medium};
        position: relative;
        width: 10rem;
        height: 3rem;
        border: 3px solid ${colors.black};
        transition: all 0.2s ease-out;
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
          bottom: -11px;
          left: 2px;
          width: 100%;
          height: 3px;
          transform: skewX(45deg);
          background-color: ${colors.black};
        }

        &:after {
          bottom: -7px;
          right: -12px;
          width: 3px;
          height: 100%;
          transform: skewY(45deg);
          background-color: ${colors.black};
        }

        &:hover {
          cursor: pointer;
        }
      }

      li:last-child {
        margin-right: 0;
      }
    `;
  }}
`;
