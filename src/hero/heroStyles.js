import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const HeroContainer = styled.div`
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100vh;
`;

export const TitleContainer = styled.div``;

export const AnimeTitle = styled.h1`
  ${({ theme }) => {
    const { fonts, device } = theme;
    return css`
      font-size: ${fonts.size.title};
      font-weight: ${fonts.weight.bold};

      ${device.desktop} {
        font-size: ${fonts.size.mediumTitle};
      }

      ${device.mobile} {
        font-size: ${fonts.size.large};
      }
    `;
  }}
`;

export const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25rem;
  white-space: nowrap;
`;

export const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05rem;
`;

export const Image = styled(motion.img)`
  ${({ theme }) => {
    const { device } = theme;
    return css`
      max-width: 250px;
      max-height: 250px;

      ${device.desktop} {
        max-width: 220px;
        max-height: 220px;
      }

      ${device.tablet} {
        display: none;
      }
    `;
  }}
`;
