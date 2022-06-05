import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  ${({ theme }) => {
    const { colors, fonts, margins, paddings } = theme;
    return css`
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: flex-end;
      padding: ${paddings.base};
      width: 100%;
      font-size: ${fonts.size.medium};
      font-weight: ${fonts.weight.light};
      background-color: #fff;
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

      li {
        margin-right: ${margins.medium};
        padding: 0 ${paddings.base};
        position: relative;
        width: 10rem;
        height: 3rem;
        text-align: center;
        line-height: 3rem;
        border: 3px solid ${colors.black};
        transition: all 0.2s ease-out;
        transform-origin: right bottom;

        &:before,
        &:after {
            border 3px solid black;
            content: '';
            display: block;
            position: absolute;
            background-color: black;
        }
      
        &:before {
            bottom: -11px;
            left: 2px;
            width: 100%;
            height: 3px;
            transform: skewX(45deg);
            background-color: black;
        }
      
        &:after {
            right: -12px;
            bottom: -7px;
            height: 100%;
            width: 3px;
            transform: skewY(45deg);
            background-color: black;
        }

        
    }
      }

      li:last-child {
        margin-right: 0;
      }

      li:nth-child(1):hover {
        background-color: ${colors.salmonPink};
      }

      li:nth-child(2):hover {
        background-color: ${colors.yellow};
      }

      li:nth-child(3):hover {
        background-color: ${colors.purple};
      }
    `;
  }}
`;
