import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Be Vietnam';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/be-vietnam-v2-latin-regular.woff2') format('woff2')
  }
  @font-face {
    font-family: 'Be Vietnam';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/be-vietnam-v2-latin-500.woff2') format('woff2')
  }
  @font-face {
    font-family: 'Be Vietnam';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/be-vietnam-v2-latin-700.woff2') format('woff2')
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

${({ theme }) => css`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.medium};
  }
`}
 
  
`

export default GlobalStyles
