import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { IoIosStar } from 'react-icons/io';

export const MenuContainer = styled.div`
  ${({ theme }) => {
    const { colors, fonts, margins, paddings } = theme;
    return css`
      display: flex;
      justify-content: flex-end;
      padding: ${paddings.base};
      width: 100vw;
      font-size: ${fonts.size.large};
      font-weight: ${fonts.weight.light};
    `;
  }}
`;

export const LogoBtn = styled.button`
  ${({ theme }) => {
    const { colors, fonts, margins, paddings } = theme;
    return css`
      position: fixed;
      top: 0;
      left: 0;
      margin: ${margins.base};
      padding: 0 ${paddings.medium};
      height: 3rem;
      font: inherit;

      line-height: 3rem;
      border: 1px solid ${colors.black};
      border-radius: 25px;
      background-color: ${colors.sageGreen};
    `;
  }}
`;

export const MenuBar = styled.ul`
  ${({ theme }) => {
    const { colors, margins, paddings } = theme;
    return css`
      display: flex;
      justify-content: flex-end;

      li {
        margin-right: ${margins.medium};
        padding: 0 ${paddings.base};
        height: 3rem;
        line-height: 3rem;
        border: 1px solid ${colors.black};
        border-radius: 25px;
        transition: all 0.2s ease-out;
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
