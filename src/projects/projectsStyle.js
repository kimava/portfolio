import styled, { css } from 'styled-components';
import { LargeBox } from '../common/boxes';

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      margin: auto;
      padding-top: 5rem;
      width: 90%;
      height: auto;
      line-height: 1.5rem;
    `;
  }}
`;

export const Project = styled(LargeBox)`
  ${({ theme }) => {
    const { colors, device, margins } = theme;
    return css`
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: ${margins.xlarge};

      &:nth-child(2) {
        margin-left: 10%;
        flex-direction: row-reverse;

        ${ThumbBox} {
          border-right: none;
          border-left: 3px solid ${colors.black};
        }
      }

      ${device.mobile} {
        flex-direction: column;
        height: auto;
        &:nth-child(2) {
          margin-left: 0;
          flex-direction: column;
        }

        &:nth-child(2) {
          ${ThumbBox} {
            border-left: none;
          }
        }

        ${ThumbBox} {
          border: none;
          border-bottom: 3px solid ${colors.black};
        }
      }
    `;
  }}
`;

export const ThumbBox = styled.div`
  ${({ theme }) => {
    const { colors, device, paddings } = theme;
    return css`
      display: flex;
      flex: 1;
      padding: ${paddings.medium};
      height: 100%;
      align-items: center;
      border-right: 3px solid ${colors.black};

      img {
        width: 100%;
      }
      ${device.mobile} {
        flex: 1;
      }
    `;
  }}
`;

export const ContentBox = styled.div`
  ${({ theme }) => {
    const { colors, device, fonts, margins, paddings } = theme;
    return css`
      padding: ${paddings.medium};
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 2;
      height: 100%;
      overflow-y: scroll;

      h3 {
        margin-top: ${margins.small};
        margin-bottom: ${margins.medium};
      }

      p {
        margin-bottom: ${margins.base};
      }

      div {
        margin-bottom: ${margins.base};
      }

      span {
        margin-right: ${margins.base};
        font-size: ${fonts.size.xsmall};
        color: ${colors.gray};
      }

      a {
        margin-bottom: ${margins.small};
        display: block;
        color: inherit;
        text-decoration: none;
      }
    `;
  }}
`;

export const Link = styled.div`
  ${({ theme }) => {
    const { colors, fonts, margins } = theme;
    return css`
      margin-bottom: 0;

      a {
        display: inline-block;
      }

      .github,
      .link {
        margin-right: ${margins.base};
        font-size: ${fonts.size.medium};
        color: ${colors.gray};
        transition: all 0.3s ease;

        &:hover {
          color: ${colors.black};
          cursor: pointer;
        }
      }
    `;
  }}
`;
