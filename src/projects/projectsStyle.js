import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      width: 90%;
      margin: auto;
      line-height: 1.5rem;
    `;
  }}
`;

export const Project = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    margin-bottom: 3rem;
    width: 90%;
    height: 25rem;
    border: 3px solid black;
    transform-origin: right bottom;

      &:before,
      &:after {
          border 3px solid black;
          content: '';
          display: block;
          position: absolute;
          background-color: black;
      }

      &:before {
          bottom: -24px;
          left: 7px;
          width: 100%;
          height: 15px;
          transform: skewX(45deg);
          background-color: black;
      }

      &:after {
          right: -23px;
          bottom: -13px;
          height: 100%;
          width: 15px;
          transform: skewY(45deg);
          background-color: black;
      }

      &:nth-child(2) {
          flex-direction: row-reverse;
      }
`;

export const ThumbBox = styled.div`
  display: flex;
  flex: 1;
  padding: 1.5rem;
  height: 88%;
  align-items: center;
  border: 1px solid black;

  img {
    width: 100%;
  }
`;

export const ContentBox = styled.div`
  ${({ theme }) => {
    return css`
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 2;
      height: 88%;
      border: 1px solid black;

      h3 {
        margin-bottom: 1.5rem;
      }

      p {
        margin-bottom: 1rem;
      }

      div {
        margin-bottom: 1rem;
      }

      span {
        margin-right: 1rem;
        font-size: 0.9rem;
        color: #696969;
      }

      a {
        display: block;
        margin-bottom: 0.5rem;
      }
    `;
  }}
`;

export const Link = styled.div`
  margin-bottom: 0;

  .github,
  .link {
    margin-right: 1rem;
    font-size: 1.3rem;
    color: #696969;
  }
`;
