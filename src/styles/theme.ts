import { createGlobalStyle } from 'styled-components'

// Colors
const colors = {
  navy: '#0a192f',
  lightNavy: '#112240',
  lightestNavy: '#233554',
  slate: '#8892b0',
  lightSlate: '#a8b2d1',
  lightestSlate: '#ccd6f6',
  white: '#e6f1ff',
  green: '#64ffda',
}

// Fonts
const fonts = {
  roboto: 'Roboto, sans-serif',
  spaceMono: 'Space Mono, monospace',
}

// Font sizes
const fontSizes = {
  fontSize0: '.5rem',
  fontSize1: '.75rem',
  fontSize2: '1rem',
  fontSize3: '1.1rem',
  fontSize4: '1.25rem',
  fontSize5: '1.5rem',
  fontSize6: '2rem',
  fontSize7: '2.5rem',
  fontSize8: '3rem',
  fontSize9: '3.5rem',
  fontSize10: '4rem',
  fontSize11: '5rem',
}

// Screens
const screens = {
  laptop: '1440px',
  smallLaptop: '1024px',
  tablet: '768px',
  largeMobile: '480px',
  smallMobile: '360px',
}

// Theme
export const theme = {
  ...colors,
  ...fonts,
  ...fontSizes,
  ...screens,
}

// Global styles
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${theme.navy};
  }
  h1, h2, h3, h4, p {
    margin: 0;
  }
`
