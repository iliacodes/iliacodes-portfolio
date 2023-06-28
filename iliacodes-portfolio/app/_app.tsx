import type { AppProps } from 'next/app';
import { TypeAnimation } from 'react-type-animation';
import './homePage.css';
import './globals.css';
import { Inter, Ubuntu_Mono } from 'next/font/google';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
    );
  }
export default MyApp;