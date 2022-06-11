import styled, { css } from 'styled-components';

export const Box = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      position: relative;
      width: 10rem;
      height: 3rem;
      border: 3px solid ${colors.black};
      transform-origin: right bottom;

      &:before,
      &:after {
        display: block;
        position: absolute;
        content: '';
        border: 3px solid ${colors.black};
        background-color: ${colors.black};
      }

      &:before {
        left: 2px;
        bottom: -11px;
        width: 100%;
        height: 3px;
        transform: skewX(45deg);
        background-color: ${colors.black};
      }

      &:after {
        right: -12px;
        bottom: -7px;
        width: 3px;
        height: 100%;
        transform: skewY(45deg);
        background-color: ${colors.black};
      }
    `;
  }}
`;

export const LargeBox = styled(Box)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 90%;
      height: 25rem;

      &:before {
        left: 7px;
        bottom: -24px;
        height: 15px;
      }

      &:after {
        right: -23px;
        bottom: -13px;
        width: 15px;
      }
    `;
  }}
`;
