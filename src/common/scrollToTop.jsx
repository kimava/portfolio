import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { ImArrowUp2 } from 'react-icons/im';

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
    scrollY > 200 ? setShowBtn(true) : setShowBtn(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    showBtn && (
      <Btn
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <ImArrowUp2 className='icon' />
      </Btn>
    )
  );
};

export default ScrollToTop;

const Btn = styled.div`
  ${({ theme }) => {
    const { colors, fonts, paddings } = theme;
    return css`
      padding: ${paddings.small};
      position: fixed;
      right: 3rem;
      bottom: 5rem;
      background-color: ${colors.white};
      border-radius: 50%;
      border: 3px solid ${colors.black};
      cursor: pointer;

      .icon {
        font-size: ${fonts.size.large};
        z-index: 99;
      }
    `;
  }}
`;
