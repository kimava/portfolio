import React from 'react';
import ContactLinks from '../common/contacLinks';
import { Container, Content, Links, Avatar } from './aboutStyles';

const About = () => {
  return (
    <Container id='about'>
      <Avatar />
      <Content>
        <h1>Hi, there π</h1>
        <p>
          νμ κ³΅λΆνλ μΆμ κΏκΎΈλ κ°λ°μ Ava μλλ€. <br />
          μλ‘μ΄ κ²μ λ°°μ°κ³  μ€μ λ‘ μ μ©ν΄ λ³΄λ λ° μ¦κ±°μμ λλλλ€.
        </p>
        <p>
          μμ°μ± μλ νλ£¨μ μ§μ°©ν©λλ€.
          <br />
          μ’μνλ μΌμ μμ°μ± λμΉκ² ν  μ μλλ‘ λμμ£Όλ νλ‘λνΈλ₯Ό λ§λ€κ³ 
          μΆμ΅λλ€.
        </p>
        <p>μ νμ κ·Όκ±°κ° μλ κ°λ°μκ° λκ³ μ λΈλ ₯ν©λλ€.</p>
        <Links>
          <ContactLinks />
        </Links>
      </Content>
    </Container>
  );
};

export default React.memo(About);
