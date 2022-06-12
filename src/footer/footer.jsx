import React from 'react';
import ContactLinks from '../common/contacLinks';
import { Container, Links } from './footerStyle';

const Footer = () => {
  const handleCopy = async (e) => {
    const email = 'ava.soyeon.kim@gmail.com';
    try {
      await navigator.clipboard.writeText(`${email}`);
      e.target.innerText = 'copied!';
      setTimeout(() => {
        e.target.innerText = `${email}`;
      }, 1000);
    } catch (error) {
      console.log('copy failed');
    }
  };

  return (
    <Container>
      <Links>
        <button onClick={handleCopy}>ava.soyeon.kim@gmail.com</button>
        <ContactLinks />
      </Links>
    </Container>
  );
};

export default React.memo(Footer);
