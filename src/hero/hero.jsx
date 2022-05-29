import React from 'react';
import { HeroContainer } from './heroStyles';
import Title from './title';

const Hero = () => {
  return (
    <HeroContainer>
      <Title text='FRONTEND DEVELOPER' />
      <Title text='& &nbsp; PHILOMATH' />
    </HeroContainer>
  );
};

export default Hero;
