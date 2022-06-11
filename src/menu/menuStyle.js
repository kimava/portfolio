import styled, { css } from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Box } from '../common/boxes';

export const MenuContainer = styled.div`
  ${({ theme }) => {
    const { colors, device, fonts, paddings } = theme;
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

      ${device.mobile} {
        display: none;
      }
    `;
  }}
`;

export const MenuBar = styled.ul`
  ${({ theme }) => {
    const { margins, paddings } = theme;
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

      ${Box} {
        margin-right: ${margins.medium};

        &:hover {
          cursor: pointer;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    `;
  }}
`;
