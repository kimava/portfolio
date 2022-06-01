import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { AnimeTitle, Character, Word } from './heroStyles';

const Title = ({ text }) => {
  const anime = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    inView ? anime.start('visible') : anime.start('hidden');
  }, [anime, inView]);

  const wordAnime = {
    visible: {},
    hidden: {},
  };

  const characterAnime = {
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.6, 0.3, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
  };

  return (
    <AnimeTitle aria-label={text}>
      {text.split(' ').map((word, index) => {
        return (
          <Word
            ref={ref}
            aria-hidden='true'
            key={index}
            initial='hidden'
            animate={anime}
            variants={wordAnime}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.08,
            }}
          >
            {word.split('').map((char, index) => {
              return (
                <Character
                  key={index}
                  aria-hidden='true'
                  variants={characterAnime}
                >
                  {char}
                </Character>
              );
            })}
          </Word>
        );
      })}
    </AnimeTitle>
  );
};

export default Title;
