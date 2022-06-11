const colors = {
  green: '#01A171',
  orange: '#FE8324',
  pink: '#FEC8C8',
  purple: '#E2BCEB',
  sageGreen: '#BFD3CF',
  salmonPink: '#FF7070',
  yellow: '#FEC748',
  black: '#000',
  gray: '#696969',
  white: '#fff',
};

const device = {
  mobile: `@media screen and (max-width: 26.5rem)`,
  tablet: `@media screen and (max-width: 48rem)`,
  desktop: `@media screen and (max-width: 72.5rem)`,
};

const fonts = {
  family: `'Inter', 'IBM Plex Sans KR', sans-serif`,
  size: {
    xsmall: '0.9rem',
    small: '1rem',
    regular: '1.125rem',
    medium: '1.313rem',
    large: '2rem',
    mediumTitle: '6rem',
    title: '7rem',
  },
  weight: {
    light: 200,
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
};

const margins = {
  small: '0.5rem',
  base: '1rem',
  medium: '1.5rem',
  large: '2rem',
  xlarge: '3rem',
};

const paddings = {
  small: '0.5rem',
  base: '1rem',
  medium: '1.5rem',
  large: '2rem',
  xlarge: '3rem',
};

export const defaultTheme = {
  colors,
  device,
  fonts,
  margins,
  paddings,
};
