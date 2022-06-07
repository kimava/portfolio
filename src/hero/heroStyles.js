import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const HeroContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  flex: 2;
  width: 70%;
`;

export const AnimeTitle = styled.h1`
  ${({ theme }) => {
    const { fonts } = theme;
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

export const Icon = styled.div`
  flex: 1;
  position: relative;
  height: 55%;
`;

export const Image = styled(motion.img)`
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 250px;
  max-height: 250px;
`;
