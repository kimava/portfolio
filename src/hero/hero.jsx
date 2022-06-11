import React from 'react';
import { HeroContainer, TitleContainer, Image } from './heroStyles';
import Title from './title';
import heart from '../assets/heart.png';

const Hero = () => {
  return (
    <HeroContainer>
      <TitleContainer>
        <Title text='FRONTEND DEVELOPER' />
        <Title text='& &nbsp; PHILOMATH' />
      </TitleContainer>
      <Image
        src={heart}
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            bounce: 0.6,
            duration: 0.9,
            ease: 'easeInOut',
            delay: 1.1,
          },
        }}
      />
    </HeroContainer>
  );
};

export default Hero;
