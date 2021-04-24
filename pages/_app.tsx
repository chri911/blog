import React from 'react';
import '../styles/globals.css';
import { wrapper } from '../components/redux/store';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
