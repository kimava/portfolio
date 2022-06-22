import styled, { css } from 'styled-components';
import { LargeBox } from '../common/boxes';

export const Container = styled.div`
  ${({ theme }) => {
    const { paddings } = theme;
    return css`
      padding: ${paddings.xlarge} 0;
      height: 80vh;
    `;
  }}
`;

export const Post = styled(LargeBox)`
  ${({ theme }) => {
    const { colors, device, fonts, margins, paddings } = theme;
    return css`
      margin: auto;
      margin-bottom: ${margins.large};
      height: 5rem;

      a {
        padding-left: ${paddings.base};
        display: block;
        color: inherit;
        line-height: 5rem;
        font-size: ${fonts.size.large};
        text-decoration: none;
      }

      &:hover {
        background-color: ${colors.purple};
      }

      &:nth-child(2) {
        &:hover {
          background-color: ${colors.orange};
        }
      }

      &:nth-child(3) {
        &:hover {
          background-color: ${colors.green};
        }
      }

      ${device.mobile} {
        a {
          font-size: ${fonts.size.medium};
        }
      }
    `;
  }}
`;
