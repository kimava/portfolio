import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const HeroContainer = styled.div`
  position: absolute;
  top: 30%;
  margin: auto;
  width: 70%;
  height: 80vh;
`;

export const AnimeTitle = styled.h1`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      font-size: ${fonts.size.title};
      font-weight: ${fonts.weight.bold};
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
