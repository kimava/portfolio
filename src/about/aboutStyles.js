import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import avatar from '../assets/avatar.png';

export const Container = styled(motion.div)`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `;
  }}
`;

export const OuterContainer = styled(motion.div)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      position: relative;
      margin: auto;
      width: 90%;
      height: 75vh;
      background-color: ${colors.yellow};
      border: 1px solid ${colors.black};
      border-radius: 10px;
    `;
  }}
`;

export const MiddleContainer = styled(motion.div)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      position: absolute;
      top: 0rem;
      right: 0rem;
      margin: auto;
      width: 100%;
      height: 75vh;
      background-color: ${colors.purple};
      border: 1px solid ${colors.black};
      border-radius: 10px;
    `;
  }}
`;

export const AboutContainer = styled(motion.div)`
  ${({ theme }) => {
    const { colors, fonts, margins } = theme;
    return css`
      position: absolute;
      top: 0rem;
      right: 0rem;
      width: 100%;
      height: 75vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: 1px solid ${colors.black};
      border-radius: 10px;

      p {
        margin-bottom: ${margins.small};
        line-height: 1.6rem;
        font-size: ${fonts.size.medium};
      }
    `;
  }}
`;

export const Avatar = styled(motion.img)`
  display: inline-block;
  margin: 1rem;
  max-width: 400px;
  max-height: 300px;
`;

export const Content = styled.div`
  ${({ theme }) => {
    const { fonts, margins, paddings } = theme;
    return css`
      padding: ${paddings.base};
      h1 {
        margin-bottom: ${margins.small};
        font-size: ${fonts.size.large};
        font-weight: ${fonts.weight.normal};
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
      height: 3rem;
      font: inherit;

      line-height: 3rem;
      border: 1px solid ${colors.black};
      border-radius: 25px;
      background-color: ${colors.sageGreen};

      &:nth-child(1) {
        margin-left: 0;
      }
    `;
  }}
`;
