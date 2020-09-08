import hexToRgba from 'hex-to-rgba';

export const lightTheme = {
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  fontSizes: [8, 12, 14, 16, 18, 20, 24, 26, 30, 32, 36, 40, 44, 48],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 96],
  fonts: {
    body: 'Poppins, sans-serif;',
    heading: 'p22-mackinac-pro, serif;',
    monospace: 'Menlo, monospace',
  },
  colors: {
    background: '#ffffff',
    textColor: '#000000',
    textAlt: '#666666',
    primary: {
      100: '#EF8C57',
      200: '#ED7837',
      300: '#EA661F',
    },
    secondary: {
      100: '#338E87',
      200: '#DAEFEE',
    },
  },
  buttons: {
    primary: {
      backgroundColor: 'primary.200',
      color: 'white',
      '&:hover': {
        backgroundColor: 'primary.300',
      },
    },
    secondary: {
      backgroundColor: 'white',
      boxShadow: '',
    },
  },
  forms: {
    input: {
      transition: 'all 200ms',
      minHeight: '40px',
      border: 0,
      backgroundColor: '#F7F6F4',
      '&:hover': {
        backgroundColor: 'white',
        boxShadow: (theme) => `0 0 0 3px ${hexToRgba(theme.colors.primary['100'], 0.3)}`,
      },
      '&:focus': {
        outline: 0,
        backgroundColor: 'white',
        boxShadow: (theme) =>
          `0 0 0 1px ${theme.colors.primary['200']}, 0 0 0 3px ${hexToRgba(theme.colors.primary['100'], 0.3)}`,
      },
    },
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  radii: {
    default: 12,
  },
  sizes: {
    small: null,
    default: 1080,
    wide: 1200,
  },
  borders: {},
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {},
  text: {
    h1: { fontSize: [8, 10] },
    h2: { fontSize: [6, 8] },
    h3: { fontSize: [5, 6] },
    h4: { fontSize: [4, 5] },
    h5: { fontSize: [3, 4] },
    h6: { fontSize: [3] },
  },
};
