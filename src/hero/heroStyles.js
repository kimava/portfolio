import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 30%;
  width: 70%;
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

export const DraggableIcons = styled.div`
  position: absolute;
  top: 30%;
  right: 0;
  width: 30%;
`;

export const Image = styled(motion.img)`
  display: inline-block;
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
`;
