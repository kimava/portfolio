import React from 'react';
import { Container, Content, Btns, LinkBtn, Avatar } from './aboutStyles';

const About = () => {
  return (
    <Container>
      <Avatar />
      <Content>
        <h1>Hi, there 😉</h1>
        <p>
          평생 공부하는 삶을 꿈꾸는 개발자 Ava 입니다. <br />
          새로운 것을 배우고 실제로 적용해 보는 데 즐거움을 느낍니다.
        </p>
        <p>
          생산성 있는 하루에 집착합니다.
          <br />
          좋아하는 일을 생산성 넘치게 할 수 있도록 도와주는 프로덕트를 만들고
          싶습니다.
        </p>
        <p>선택에 '근거가 있는' 개발자가 되고자 노력합니다.</p>
        <Btns>
          <LinkBtn>LINKED IN</LinkBtn>
          <LinkBtn>GITHUB</LinkBtn>
          <LinkBtn>BLOG</LinkBtn>
        </Btns>
      </Content>
    </Container>
  );
};

export default About;
