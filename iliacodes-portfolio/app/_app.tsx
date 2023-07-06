import type { AppProps } from 'next/app';
import '../styles/homePage.css';
import '../styles/globals.css';
import { Inter, Ubuntu_Mono } from 'next/font/google';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;