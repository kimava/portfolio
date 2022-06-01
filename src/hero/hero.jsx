import React from 'react';
import {
  HeroContainer,
  TitleContainer,
  DraggableIcons,
  Image,
} from './heroStyles';
import Title from './title';
import handheart from '../assets/handheart.gif';
import heart from '../assets/heart.png';

const Hero = () => {
  return (
    <HeroContainer>
      <TitleContainer>
        <Title text='FRONTEND DEVELOPER' />
        <Title text='& &nbsp; PHILOMATH' />
      </TitleContainer>
      <DraggableIcons>
        <Image
          src={heart}
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 100, right: 40, top: 40, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
        />
      </DraggableIcons>
    </HeroContainer>
  );
};

export default Hero;
