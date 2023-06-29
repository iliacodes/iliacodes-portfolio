import type { AppProps } from 'next/app';
import '../styles/homePage.css';
import '../styles/globals.css';
import { Inter, Ubuntu_Mono } from 'next/font/google';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
    );
  }
export default MyApp;