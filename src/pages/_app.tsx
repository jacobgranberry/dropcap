import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { ThemeProvider } from '../contexts/themeContext';
import { cache } from 'emotion';
import { AuthProvider } from '../utils/auth/auth';
import 'swiper/swiper.scss';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <CacheProvider value={cache}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </AuthProvider>
    );
  }
}
