import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    @import url(https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i);

    body, html {
        font-family: "Lato", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;
    }
  }
`