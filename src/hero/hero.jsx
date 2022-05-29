import React from 'react';
import { DraggableIcons, HeroContainer, Image } from './heroStyles';
import Title from './title';
import handheart from '../assets/handheart.gif';
import heart from '../assets/heart.png';

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Title text='FRONTEND DEVELOPER' />
        <Title text='& &nbsp; PHILOMATH' />
      </HeroContainer>
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
    </>
  );
};

export default Hero;
