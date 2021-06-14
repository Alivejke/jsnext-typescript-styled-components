import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme/main';

class CustomApp extends App {
  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default CustomApp;