import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import avatar from '../assets/avatar.jpeg';

export const Container = styled(motion.div)`
  ${({ theme }) => {
    const { device, margins } = theme;
    return css`
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 95%;
      height: 100vh;

      ${device.mobile} {
        width: 100%;
      }
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
    const { device, fonts, margins, paddings } = theme;
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

      ${device.mobile} {
        width: 100%;
        font-size: ${fonts.size.xsmall};
      }
    `;
  }}
`;

export const Links = styled.div`
  ${({ theme }) => {
    const { colors, device, margins, paddings } = theme;
    return css`
      display: flex;
      text-transform: uppercase;

      a {
        margin: ${margins.small};
        margin-top: ${margins.medium};
        padding: 0 ${paddings.medium};
        position: relative;
        width: 10rem;
        height: 3rem;
        text-decoration: none;
        font: inherit;
        line-height: 2.5rem;
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
      }

      ${device.mobile} {
        flex-direction: column;

        a {
          margin: 0 0 ${margins.base} 0;
          width: 100%;
        }
      }
    `;
  }}
`;
