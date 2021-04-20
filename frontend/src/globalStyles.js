import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  body {
    background-color: #f8c291;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 25px;
  } 

  * {
    box-sizing: border-box;
  }

  h2, h1, h4 {
    line-height: 40px;
  }
`


