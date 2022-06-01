import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import avatar from '../assets/avatar.png';
import {
  Container,
  OuterContainer,
  MiddleContainer,
  AboutContainer,
  Avatar,
  Content,
  Btns,
  LinkBtn,
} from './aboutStyles';

const About = () => {
  const anime = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    inView ? anime.start('spread') : anime.start('shrink');
  }, [anime, inView]);

  const outerAnime = {
    spread: {
      x: '-0.8rem',
      y: '0.8rem',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    shrink: {
      x: 0,
      y: 0,
    },
  };

  const midAnime = {
    spread: {
      x: '-1rem',
      y: '1rem',
    },
    shrink: {
      x: 0,
      y: 0,
    },
  };

  const avatarAnime = {
    spread: {
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        delay: 0.5,
        duration: 1.9,
        opacity: {
          duration: 1.5,
          ease: 'easeInOut',
        },
      },
    },
    shrink: {
      opacity: 0,
    },
  };

  const titleAnime = {
    spread: {
      y: [0, -10, -20, 0],
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.3,
        delay: 0.6,
        ease: 'easeInOut',
        bounce: 0.7,
      },
    },

    shrink: {
      y: -70,
      opacity: 0,
    },
  };

  const textAnime = {
    spread: (custom) => ({
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.1,
        duraion: 1.2,
        delay: custom * 0.8,
        ease: 'easeIn',
      },
    }),
    shrink: {
      opacity: 0,
    },
  };

  const btnAnime = {
    spread: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 3,
      },
    },
    shrink: {
      opacity: 0,
    },
  };

  return (
    <Container ref={ref}>
      <OuterContainer>
        <MiddleContainer animate={anime} variants={outerAnime}>
          <AboutContainer animate={anime} variants={midAnime}>
            <Avatar
              src={avatar}
              alt='avatar'
              animate={anime}
              variants={avatarAnime}
            />
            <Content>
              <motion.h1 animate={anime} variants={titleAnime}>
                Hi, there 😉
              </motion.h1>
              <motion.p animate={anime} variants={textAnime} custom={1}>
                평생 공부하는 학자를 꿈꾸는 개발자 Ava 입니다. <br />
                새로운 것을 배우고 실제로 적용해 보는 데 즐거움을 느낍니다.
              </motion.p>
              <motion.p animate={anime} variants={textAnime} custom={2}>
                생산성 있는 하루에 집착합니다.
                <br />
                좋아하는 일을 생산성 넘치게 할 수 있도록 도와주는 프로덕트를
                만들고 싶습니다.
              </motion.p>
              <motion.p animate={anime} variants={textAnime} custom={3}>
                선택에 '근거가 있는' 개발자가 되고자 노력합니다.
              </motion.p>
              <Btns animate={anime} variants={btnAnime}>
                <LinkBtn whileHover={{ scale: 1.1 }}>LINKED IN</LinkBtn>
                <LinkBtn whileHover={{ scale: 1.1 }}>GITHUB</LinkBtn>
                <LinkBtn whileHover={{ scale: 1.1 }}>BLOG</LinkBtn>
              </Btns>
            </Content>
          </AboutContainer>
        </MiddleContainer>
      </OuterContainer>
    </Container>
  );
};

export default About;
