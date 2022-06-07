import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import avatar from '../assets/avatar.jpeg';

export const Container = styled(motion.div)`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `;
  }}
`;

export const Avatar = styled.div`
  ${({ theme }) => {
    const { margins } = theme;

    return css`
      margin-bottom: ${margins.large};
      width: 250px;
      height: 250px;
      background-image: url(${avatar});
      background-position: center center;
      background-size: contain;
      border-radius: 50%;
    `;
  }}
`;

export const Content = styled.div`
  ${({ theme }) => {
    const { fonts, margins, paddings } = theme;
    return css`
      padding: ${paddings.base};
      text-align: center;

      h1 {
        margin-bottom: ${margins.base};
        font-size: ${fonts.size.large};
        font-weight: ${fonts.weight.normal};
      }

      p {
        margin-bottom: ${margins.base};
        line-height: 1.4rem;
      }
    `;
  }}
`;

export const Btns = styled(motion.div)`
  display: flex;
`;

export const LinkBtn = styled(motion.button)`
  ${({ theme }) => {
    const { colors, margins, paddings } = theme;
    return css`
      margin: ${margins.small};
      margin-top: ${margins.medium};
      padding: 0 ${paddings.medium};
      position: relative;
      width: 10rem;
      height: 3rem;
      font: inherit;
      color: ${colors.black};
      background-color: ${colors.white};
      border: 3px solid ${colors.black};
      transform-origin: right bottom;

      &:before,
      &:after {
        position: absolute;
        display: block;
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

      &:nth-child(1) {
        margin-left: 0;
      }
    `;
  }}
`;
